import { createContext } from 'react';

export type UserContextProps = {
  user: any;
  setUser: Function;
} 

export const UserContext = createContext<UserContextProps>({} as UserContextProps);