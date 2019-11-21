import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail, List } from './styles'
import * as dataconfig from 'data/config';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt={dataconfig.defaultDescription}  />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
        Hello! I'm Kate, a web developer based in North Carolina who enjoys building front-end applications. I develop exceptional websites that provide intuitive user interfaces with efficient and modern technologies.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <div>
          <List>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>jQuery</li>
            <li>HTML5 / CSS3</li>
            <li>Bootstrap / Material-UI</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>AWS</li>
          </List>
        </div>
       {/* <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>  */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)


