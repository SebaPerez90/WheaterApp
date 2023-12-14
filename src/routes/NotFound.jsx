import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { Redirect } from 'wouter';
import { useStore } from '../../store';
import wrongLocation from '../assets/svg/wrong-location.svg';

const NotFound = () => {
  // global state trigger the redirection to home route "/"
  const { setShouldRedirect, shouldRedirect } = useStore();

  useEffect(() => {
    errorInfoMessage();
  }, []);

  const errorInfoMessage = () =>
    toast.custom(<div className='errorInfoMessage'>current location not found</div>, {
      duration: 5000,
    });

  return (
    <section className='not-found-container'>
      <div className='not-found-content'>
        <div className='wrong-location'>
          <h1>ERROR !</h1>
          <div>
            <p className='scale-125'>4</p>
            <img
              src={wrongLocation}
              alt='NotFoundLocation-icon'
            />
            <p className='scale-125'>4</p>
          </div>
        </div>
        <div className='btn-message-container'>
          <p>it looks like you are lost ...</p>
          <button
            className='not-found-redirect-btn'
            onClick={() => setShouldRedirect()}
          >
            go back home
          </button>
        </div>
      </div>
      {shouldRedirect ? null : <Redirect to='/' />}
    </section>
  );
};

export default NotFound;
