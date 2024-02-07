import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  const styledSignIn ={
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: "white",
  }

  return (
    <div style={styledSignIn} >
      <GlobalStyle />
      <h1 className='text-center text-3xl font-bold py- color-white'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;