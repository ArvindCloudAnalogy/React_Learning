import { useState } from 'react';
import UserProvider from './context/UserContext.jsx';
import Register from './components/Register.jsx';
import SignIn from './components/SignIn.jsx';

function App() {
  const [page, setPage] = useState('register');

  return (
    <UserProvider>
      <main className="App">
        {page === 'register' ? (
          <Register onSwitchToSignIn={() => setPage('signin')} />
        ) : (
          <SignIn onSwitchToRegister={() => setPage('register')} />
        )}
      </main>
    </UserProvider>
  );
}

export default App;