import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Throughout my career, I've had the privilege of working on diverse projects that blend innovation, problem-solving, and a commitment to excellence. Below, you'll find a snapshot of some of the key projects that define my professional journey.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active="true" value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          {/* <Divider />
          {/* {toggle === 'web app' ?
            <ToggleButton active="true" value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          // } */}
           {/* <Divider />
          // {toggle === 'android app' ?
          //   <ToggleButton active="true" value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          //   :
          //   <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
        // } */}
          <Divider />
          {toggle === 'frontend' ?
            <ToggleButton active="true" value="frontend" onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'UX/UI Design' ?
            <ToggleButton active="true" value="UX/UI Design" onClick={() => setToggle('UX/UI Design')}>UX/UI Design</ToggleButton>
            :
            <ToggleButton value="UX/UI Design" onClick={() => setToggle('UX/UI Design')}>UX/UI Design</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects