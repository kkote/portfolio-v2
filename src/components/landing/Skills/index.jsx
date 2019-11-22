import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button, Header } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail, List, HeaderSkills} from './styles'
import * as dataconfig from 'data/config';

export const Skills = () => (
  <Wrapper id="about">
    
    <SkillsWrapper as={Container}>
    <Header>About Me</Header>
      <Details>
      
        
        <p>
        Hello! I'm Kate, a web developer based in North Carolina who enjoys building front-end applications. I develop exceptional websites that provide intuitive user interfaces with efficient and modern technologies.
        </p>
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


