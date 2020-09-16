import React, { useState, useContext } from 'react';

export const UserContext = React.createContext([]);

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ initialValue = {}, children }) {
    const [user, setUser] = useState(initialValue);

    function saveUser(newUser) {
        console.log('Incoming USER: ', newUser);
        setUser(newUser);
        console.log('SETTED USER: ', user);
    }

    return <UserContext.Provider value={{ user, saveUser }}>
        {children}
    </UserContext.Provider>
}