import React from 'react';
const NavBar = ()=>{
   return  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        {/*<img src={hoc_logo } className="" style={{"width":"15rem", "height":"3rem" }} alt="Hoc-logo" />*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <span className="nav-link active">Welcome to the ships management App</span>
            </li>
        </ul>
        {/*The search backend service is to be implemented*/}
        <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search" disabled/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit" disabled>Search</button>
        </form>
        </div>  
    </div>  
    </nav>
   
}

export  default NavBar;