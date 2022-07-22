import React from 'react';
import Project from './Project';
import Footer from '../Footer/Footer';


const Portfolio = () => {
    const projects = [
        {name: "Professional Portfolio", image: "Images/portfolio.PNG", link: "https://kaylavangel.github.io/professional-portfolio/" },
        {name: "Swapper's Meet", image: "Images/swappers-meet.JPG", link: "https://swappers-meet.herokuapp.com/dashboard/"},
        {name: "Glight Consultant", image: "Images/flight.jpg", link: "https://emmazart.github.io/bootcamp-project-1/"},
        {name: "Code Quiz", image: "Images/Code-quiz.PNG", link: "https://kaylavangel.github.io/Code-Quiz/"},
        {name: "Employee Tracker", image: "Images/SQL.PNG", link: "https://github.com/KaylaVangel/employee-tracker"},
        {name: "Social Network API", image: "Images/Social-Networking.JPG", link: "https://github.com/KaylaVangel/Social-Network-API"}


    ]

    return (
        <>
            <div>
                <Project />

            </div>
            <Footer />
        </>
    )
}


export default Portfolio;