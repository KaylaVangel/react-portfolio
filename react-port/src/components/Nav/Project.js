import React from 'react';


const Project = ({project}) => {
    return (
        <>
            <div>
                {project.name}
                <img className="projectImage" src={project.image}/>
                <a href>{project.link}</a>
                
            </div>
        </>
    );
}




export default Project;

