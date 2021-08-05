import Image from 'next/image';
import { Auth, Hub } from 'aws-amplify';
import { useEffect, useState } from 'react';
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
  AmplifySignOut,
  withAuthenticator,
} from '@aws-amplify/ui-react';

const federated = {
  google_client_id: '*.apps.googleusercontent.com',
};

const Home = () => {
  const googleLogin = () => {
    Auth.federatedSignIn({ provider: 'Google' });
  };

  return (
    <div>
      <Image
        src={'/dan-cristian-padure-Oj7nnln5k3k-unsplash.jpg'}
        width={200}
        height={200}
      />
      <button onClick={googleLogin}>Google Login</button>
      <button onClick={() => Auth.federatedSignIn()}>Login</button>
      <AmplifyAuthContainer>
        <AmplifyAuthenticator />
      </AmplifyAuthContainer>
    </div>
  );
};

// export default Home;
// export default withAuthenticator(Home);
export default withAuthenticator(Home, true, [], federated);
