import Heading from 'common/headings';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../../styles/Individuallisting/projectOverview.scss';
import projectdata from 'common/projectDesc/projectdata';
import ProjectDesc from 'common/projectDesc';
// import ProjectDesc from 'common'






const creatprojectInfo = (projectdata)=>{

    return (
        <ProjectDesc
            key = {projectdata.id}
            title = {projectdata.title}
            desc = {projectdata.desc}
           
        />
    );
    
}

const ProjectOverview = () => {
  return (
    <section>
        <div className='container'>
            <Heading
                heading3 = "Project Overview"
            />
             <div className='projectOverview-tabs-div'>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
                >
                <Tab eventKey="home" title="Project Information">
                    {projectdata.map(creatprojectInfo)}
                </Tab>
                <Tab eventKey="profile" title="Issuer Information">
                    {projectdata.map(creatprojectInfo)}
                </Tab>
                <Tab eventKey="document" title="Project Documents">
                    {projectdata.map(creatprojectInfo)}
                </Tab>
                
            </Tabs>
          </div>
        </div>
    </section>
  )
}

export default ProjectOverview