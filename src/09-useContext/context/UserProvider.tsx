import { useState } from "react"
import { UserContext } from "./UserContext"


interface props {
  children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}