import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Redirect } from 'wouter';
import { useStore } from '../../store';

const NotFound = () => {

  // global state trigger the redirection to home route "/"
  const { setShouldRedirect, shouldRedirect } = useStore();

  useEffect(() => {
    errorInfoMessage();
  }, []);

  const errorInfoMessage = () =>
    toast.custom(<div className='errorInfoMessage'>current location not found <span style={{textShadow: 'none'}}>❗</span></div>, {
      duration: 2000,
    });

  return (
    <section className='not-found-container'>
      <div className='not-found-content'>
        <div className='pepe'>ERROR !</div>
        <p>
          4
          <span className='not-found-span'>
            <FaLocationDot />
          </span>
          4
        </p>
        <div className='btn-message-container'>
          <p>it looks like you are lost</p>
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
