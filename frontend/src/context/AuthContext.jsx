import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();



export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);





  // Restore authentication after refresh

  useEffect(() => {


    const savedToken = localStorage.getItem("token");

    const savedUser = localStorage.getItem("user");



    try {


      if (savedToken && savedUser) {


        setToken(savedToken);


        setUser(JSON.parse(savedUser));


      }


    } catch (error) {


      console.log(
        "Authentication restore error:",
        error
      );


      localStorage.removeItem("token");

      localStorage.removeItem("user");


    }



    setLoading(false);



  }, []);







  // Login Function

  function login(userData, jwtToken) {


    setUser(userData);


    setToken(jwtToken);



    localStorage.setItem(
      "token",
      jwtToken
    );



    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


  }







  // Logout Function

  function logout() {


    setUser(null);


    setToken(null);



    localStorage.removeItem(
      "token"
    );



    localStorage.removeItem(
      "user"
    );



  }







  return (


    <AuthContext.Provider


      value={

        {

          user,

          token,

          loading,

          login,

          logout,

        }

      }


    >


      {children}


    </AuthContext.Provider>


  );


}







export function useAuth() {


  return useContext(AuthContext);


}