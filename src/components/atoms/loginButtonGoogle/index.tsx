import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const clientId =
  '555383435561-vioa7ivbmfp5j692bpmufuki31ajuds9.apps.googleusercontent.com';

export const LoginButtonGoogle = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};
