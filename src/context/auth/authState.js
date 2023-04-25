import AuthContext from "./authContext";
const AuthState = (props) => {


    const host = "http://localhost:3000";
    const login = async (email, password) => {
        const response = await fetch(`${host}/farmers/login`, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        });
        const json = await response.json();
        // console.log(json);
        return json;
        // setStatus(json);
      };
      const signUp = async (name, email, password,state,address,phone) => {
        const response = await fetch(`${host}/`, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ name: name, email: email, password: password,state:state,address:address,phone:phone}),
        });
        const json = await response.json();
        return json;
      };
      const getUser = async (id) => {
        const response = await fetch(`${host}/farmers/getUser`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
            "user-id": id,
          },
        });
        const json = await response.json();
        return json;
      };
      return (
        <AuthContext.Provider
          value={{
            login,
            signUp,
            getUser,
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );
};

export default AuthState;