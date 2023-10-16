import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Redirect } from 'wouter';

const NotFound = () => {
  useEffect(() => {
    errorInfoMessage();
  }, []);

  const [redirect, setRedirect] = useState(false);

  const errorInfoMessage = () =>
    toast.custom(<div className='errorInfoMessage'>current location not found</div>, {
      duration: 2000,
    });

  return (
    <section className='not-found-container'>
      <div className='not-found-content'>
        <div className='pepe'>ERROR</div>
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
            onClick={() => setRedirect(true)}
          >
            go back home
          </button>
        </div>
      </div>
      {redirect === true ? <Redirect to='/' /> : null}
    </section>
  );
};

export default NotFound;
