import React from 'react';

const ProjectDesc = (props) => {
  return (
    <div className='project-desc'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
  );
}

export default ProjectDesc;