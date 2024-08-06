import React, { useContext, useState, createContext } from 'react';

const CurrentUserContext = createContext();
const SetCurrentUserContext = createContext();

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}

export function useSetCurrentUser() {
  return useContext(SetCurrentUserContext);
}

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}
