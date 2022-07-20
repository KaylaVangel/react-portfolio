import React from 'react';
import Nav from '../Nav';
import About from '../Nav/About';
import Footer from '../Footer';

const Homepage = () => {
    return (
        <>
            <Nav/>
            <div className='container'>
                <About/>
            </div>
            <div> <Footer/> </div>
        </>
    );
}


export default Homepage;