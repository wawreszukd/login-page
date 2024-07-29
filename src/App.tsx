import Loginbar from "./components/Loginbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import './App.css'
import {useState} from "react";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (<>
        {loggedIn ? <div className={"content"}>You are logged in</div> : <>
            <Loginbar loggedIn={setLoggedIn}/>
            <Sidebar/>
        </>}
    </>);
}