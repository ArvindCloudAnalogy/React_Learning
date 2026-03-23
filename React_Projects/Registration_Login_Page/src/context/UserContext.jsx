import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers(prev => [...prev, user]);
    };

    const checkUserExists = (username) => {
        return users.some(user => user.name === username);
    };

    const login = (username, password) => {
        return users.some(user => user.name === username && user.password === password);
    };

    return (
        <UserContext.Provider value={{ users, addUser, checkUserExists, login }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;