
import Hamburger from './Hamburger'
import Left from './left'
import Middle from './Middle'


import './Weather.css'
export default function Weather(){
    
    return(
       
           <div className="main-container">
             <Hamburger id="hamburger-component" />
               <Left />
               <Middle  />
              
           </div>
          
          

        
    )
}