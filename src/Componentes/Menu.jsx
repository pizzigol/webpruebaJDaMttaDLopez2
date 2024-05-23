import React from "react";
import { Link } from "react-router-dom";


export default function Menu(){
    return( 
         <header className="hh-header">
           
          
            <div className="hh-header-div">
              <p className="hh-title">AlquileresTemporarios.com</p>
              <img className="hh-imagen-logo"  
              src="./casas.jpg" 
              alt="logo de casas" /> 
            </div>

            
           <nav className="hh-nav" >
           <ul className="hh-ul" >
              <li className="hh-nav-link" >
              <Link to={"/"}>Pagina Principal</Link>
              </li>  
              <li className="hh-nav-link">
              <Link to={"/quienessomos"}>Quienes Somos</Link>
              </li>
              <li className="hh-nav-link">
              <Link to={"/contactos"}>Contactos</Link>
              </li>
              <li className="hh-nav-link">
              <Link to={"/alquileres"}>Alquileres</Link>
              </li>
            
            
            </ul>
            
            </nav>
           
      </header>
     
     
      
    );
}