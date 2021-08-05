import Image from 'next/image';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';
import { useEffect, useState } from 'react';

export default function Home() {
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
  return (
    <div>
      <Image
        src={'/dan-cristian-padure-Oj7nnln5k3k-unsplash.jpg'}
        width={200}
        height={200}
      />
      <div>
        <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
        {user ? (
          <button onClick={() => Auth.signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => Auth.federatedSignIn()}>
            Federated Sign In
          </button>
        )}
      </div>
    </div>
  );
}
