import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button, Header } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import * as dataconfig from 'data/config'
import { Wrapper, SkillsWrapper, Details, Thumbnail, List } from './styles'

export const Skills = () => (
  <Wrapper as={Container} id="about">
    <Header>About Me</Header>
    <SkillsWrapper>
      <Details>
        <p>
          Hi! I'm Kate, a web developer that builds intuitive user interfaces
          with JavaScript and React. I also develop practical back-end programs
          with Python and Django.
        </p>
        <p>
          I'm passionate about learning and enjoy continuously challenging
          myself. Currently, I'm taking Java and Spring Boot coursework which
          will be applied to make a project a full-stack application.
        </p>
        <p>Technologies I've been working with:</p>
        <div>
          <List>
            <li>JavaScript (ES6+)</li>
            <li>React </li>
            <li>jQuery</li>
            <li>HTML5 / CSS3</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>AWS</li>
          </List>
        </div>
      </Details>

      <Thumbnail>
       {/* <img src={dev} alt={dataconfig.defaultDescription} /> */}
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
)
