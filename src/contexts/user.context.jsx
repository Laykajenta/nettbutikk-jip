import { createContext, useState } from "react";

// the actual value you want to acess
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the provider component that will wrap around the app
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
