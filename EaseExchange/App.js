import * as React from 'react';
import Dashboard from './Dashboard';
import Login from './Authentication/Login';
import { AuthContext } from './Authentication/auth-context';


export default function App() {
  const [user, setUser] = React.useState(null); 

  return (
    <AuthContext.Provider value={[user, setUser]}>
        { 
          user ? <Dashboard /> : <Login />
        }
    </AuthContext.Provider>
  );
}
