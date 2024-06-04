
import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from '../src/images/regoteLogo.webp';
import {useState} from "react";
import Alert from "./components/Alert";

function App() {

    const[jwtToken, setJwtToken] = useState("");
    const[alertMessage, setAlertMessage] = useState("");
    const[alertClassName,setAlertClassName] = useState("is-hidden")
    const navigate = useNavigate();
    const logOut = () => {
        setJwtToken("");
        navigate("/");
    }

  return (
      <div className="container">
          <div className="row">
              <div className="column">
                  <h1 className="mt-5">Regotes Rocks!</h1>
              </div>
          </div>
          <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                  <img src={logo} width="75px" alt="aiNoteLogo:)" />
              </div>

              <div className="navbar-menu">
                  <div className="navbar-start">
                      <Link to="/" className="navbar-item" activeClassName="is-active">Home</Link>
                      {jwtToken !== "" &&
                          <>
                      <Link to="/Companies" className="navbar-item" activeClassName="is-active">Companies</Link>
                      <Link to="/chat" className="navbar-item" activeClassName="is-active">Chat</Link>
                      <Link to="/admin" className="navbar-item" activeClassName="is-active">Admin</Link>
                          </>
                      }
                      <Link to="/API" className="navbar-item" activeClassName="is-active">Info</Link>
                  </div>
                  <div className="navbar-end">
                      <div className="buttons">
                          {jwtToken === ""
                           ?   <Link to="/signup" className="button is-primary">Sign Up</Link>
                              : <></>
                          }
                          {jwtToken === ""
                          ? <Link to="/login" className="button is-light">Login</Link>
                              : <a href="#!" onClick={logOut} className="button is-primary">Logout</a>
                          }
                      </div>
                  </div>
              </div>
          </nav>


          <div className="container">
              <Alert
                  message={alertMessage}
                  className={alertClassName}
                  />
              <Outlet context={{
                  jwtToken,setJwtToken,setAlertMessage,setAlertClassName
              }}/>
          </div>
      </div>
  );
}


export default App;
