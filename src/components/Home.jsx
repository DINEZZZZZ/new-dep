import React from 'react'

import NavBar from './NavBar/NavBar'
import SectionLinks from './clander/Clander'
import Footer from './Footer/Footer'
import Greeting from './Footer/Greetings'
import ShoppingPage from './Footer/Shopping'
const Home = () => {
  return (
    <div> 
 <NavBar/>
 <Greeting/>
 <SectionLinks/>
 <ShoppingPage/>
 <Footer/>

    </div>
  )
}

export default Home