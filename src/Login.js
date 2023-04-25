import React,{useContext,useEffect,useState} from 'react'
import authContext from "./context/auth/authContext";
import {Link, useNavigate} from 'react-router-dom'


const Login = () => {
  const history = useNavigate();
  const context = useContext(authContext);
  const {login} = context;
  document.title = "Krishi - Login";
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  useEffect(() => {
    if (localStorage.getItem("auth-Token")) {
      history("/");
    }
  }, []);


    const setMail = (e) => {
      setemail(e.target.value);
    };
    const setPass = (e) => {
      setpassword(e.target.value);
    };
  
    const loginAttempt = (e) => {
      e.preventDefault();
  
      login(email, password).then((res) => {
        // console.log(res);
        if (res.success) {
          localStorage.setItem("auth-Token", res.authToken);
          history("/");
          //   console.log(status)
        }})};
  return (
    <>
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"></img>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
        <form onSubmit={loginAttempt}>

          

        
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" onChange={setMail} className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" onChange={setPass} className="form-control form-control-lg"
              placeholder="Enter password" />
            
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              style={{"padding-left": "2.5rem; padding-right: 2.5rem;"}} >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="./signup"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  


   
</section>
    </>
  )
  }

export default Login;