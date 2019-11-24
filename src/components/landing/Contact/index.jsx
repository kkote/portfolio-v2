import React from 'react'
import { Container, Header } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Header>Contact</Header>
    <Details>
     <ContactForm /> 
    </Details>
    <Thumbnail>
     {/* <img src={contact} alt="" /> */}
    </Thumbnail>
  </Wrapper>
)
