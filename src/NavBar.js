import React, { useState } from "react"
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {

    const [ active, setActive ] = useState("");

    function handleClick(e) {
        setActive(e.target.value)
        if (e.target.value === "logout") {
            handleLogoutClick()
        }
    }

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

 return (
 <div>
    <header>
    <h1 className="mastHead">Aaron Lally</h1>
    <nav id="navBar">
        <NavLink exact className="button" to="/">
            <button onClick={handleClick} className={active === "home" ? "active" : "other"} value="Home">Home</button>
        </NavLink>
        <NavLink exact className="button" to="/about">
            <button onClick={handleClick} className={active === "about" ? "active" : "other"} value="About">About</button>
        </NavLink>
        <NavLink exact className="button" to="/projects">
            <button onClick={handleClick} className={active === "projects" ? "active" : "other"} value="Projects">Projects</button>
        </NavLink>
            <NavLink exact className="button" to="/contact">
            <button onClick={handleClick} className={active === "contact" ? "active" : "other"} value="Contact">Contact</button>
        </NavLink>
        <NavLink className="button" to="/">
            <button className="logout" id="logoutButton" onClick={handleClick} value="logout">{user ? "Logout" : "Login"}</button>
        </NavLink>
    </nav>
    </header>
</div>
 )
}

export default NavBar;