import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button, Header } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail, List, HeaderSkills} from './styles'
import * as dataconfig from 'data/config';

export const Skills = () => (
  <Wrapper as={Container} id="about">
      <Header>About Me</Header>
    <SkillsWrapper >
   
      <Details>
      
        
        <p>
        Hi! I'm Kate, a web developer that recently moved to North Carolina, from Missouri. I enjoy building intuitive user interfaces with JavaScript technologies such as React. I also develop practical back-end programs with Python and Django.
        </p>
        <p>I'm passionate about learning and enjoy continously challeneging myself. Currently I'm taking Java and Spring Boot courswork which will be applied to make a project a fullstack application.</p>
        <p>Here are a few technologies I've been working with recently:</p>
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
       {/* <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>  */}
      </Details>

      <Thumbnail>
        <img src={dev} alt={dataconfig.defaultDescription}  />
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
)


