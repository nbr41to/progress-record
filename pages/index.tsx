import Image from 'next/image';
import { Auth, Hub } from 'aws-amplify';
import { useEffect, useState } from 'react';
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
  AmplifySignOut,
  withAuthenticator,
} from '@aws-amplify/ui-react';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData) => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log('Not signed in'));
  }

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
      <div>
        <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
        {user ? (
          <AmplifySignOut />
        ) : (
          <button onClick={() => Auth.federatedSignIn()}>
            Federated Sign In
          </button>
        )}
      </div>
      <AmplifyAuthContainer>
        <AmplifyAuthenticator />
      </AmplifyAuthContainer>
    </div>
  );
};

export default Home;
export default withAuthenticator(Home);
