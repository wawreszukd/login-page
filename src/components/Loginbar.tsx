import './Loginbar.css'
import {FormEvent} from "react";

export default function Loginbar(props) {

    const handleSubmit = (event: FormEvent) => {

        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value
        console.log(password, login)
        fetch('http://localhost:5000/login', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({login, password}),
        }).then(response => {
            if (response.status === 200) {
                console.log("xd")
                props.loggedIn(true)
            }
            else{
                props.loggedIn(false)
                document.getElementById("mess")!.innerText = "Wrong login or password"
            }
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
    }
    return (<div className={"loginbar"}>
        <form className={"login"} onSubmit={handleSubmit}>
            <span>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="#e8eaed"><path
                 d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
                   <input required id={"login"} name={"login"}/>
                </span>
            <span>
                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                      fill="#e8eaed"><path
                     d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
            <input required type={"password"} name={"password"} id={"password"}/>
                </span>

            <button>Login</button>
            <label id={"mess"}></label>
        </form>
    </div>);
}