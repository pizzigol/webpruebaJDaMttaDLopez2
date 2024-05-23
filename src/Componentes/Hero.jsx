
import React from "react"
import { Link } from "react-router-dom"

export default function Hero(){
  
   return( 
    
    
    
    <section className="hero">
        <h1 className="herotexto">Elegí tu Alojamiento para </h1>
        <h1 className="herotexto1">tus Vacaciones</h1>
        
        <li className="hh-nav-link-hero">
              <Link to={"/alquileres"} >Alquileres</Link>
        </li>
          
         
        
        
        
    </section>


      
    )
}
