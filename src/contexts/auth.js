import { createContext, useState } from "react";

const AuthContext = createContext({})

function AuthProvider(props){
  const [user, setUser] = useState({
    id_user: 1,
    name: "Lucas Ramos",
    email: "lucaxi@test.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoxLCJpYXQiOjE3MzA2NjMwMzIsImV4cCI6MTczMDc2MzAzMX0.1zt_gVBzfWL5CR_q-REQvaqVJA5Sv9AOpvE6AMHiBE8"})

  return <AuthContext.Provider value={{user, setUser}}>

  </AuthContext.Provider>
}

export { AuthProvider, AuthContext }