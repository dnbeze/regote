import {useState} from "react";
import Input from "./form/Input";
import {useNavigate, useOutletContext} from "react-router-dom";

const Login = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setJwtToken } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass",email,password)
        if (email === "admin@example.com") {
            setJwtToken("abc");
            setAlertClassName("is-hidden");
            setAlertMessage("");
            navigate("/");
        } else {
            setAlertClassName("notification is-danger")
            setAlertMessage("Invalid Credentials")
        }

    }

    return(
        <div>
            <div className="columns is-centered pt-6"><strong>Login</strong></div>
            <hr/>
            <div className="columns is-centered pt-6">
                <form onSubmit={handleSubmit}>
                    <Input
                        title="Email"
                        type="email"
                        className="input is-primary"
                        name="email"
                        autoComplete="email-new"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        title="Password"
                        type="password"
                        className="input is-primary"
                        name="password"
                        autoComplete="password-new"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <hr/>
                    <input
                        type="submit"
                        className="button is-light"
                        value="Login"/>
                </form>
            </div>
        </div>
    );
}

export default Login;