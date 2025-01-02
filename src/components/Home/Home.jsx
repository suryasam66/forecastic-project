import Nav from '../Nav/Nav'
import Content from './Content'

import './Home.css'
import "../../mediaqueries.css";

export default function Home(){
    return(
        <>
          <div className="home-class">
                  <Nav />
                 <Content />
                  
          </div>
        </>
    )
}