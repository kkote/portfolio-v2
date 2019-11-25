import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import * as data from 'data/myinfo.json'
import * as dataconfig from 'data/config'
import {
	Wrapper,
	IntroWrapper,
	Details,
	FirstLine,
	SecondLine,
	ThirdLine,
	FourthLine,
	Contact,
} from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<FirstLine>Hi, </FirstLine>
				<SecondLine>I'm Kate.</SecondLine>
				<ThirdLine>A web developer.</ThirdLine>
				<FourthLine>
					<p>
						I build front-end applications, utilize React to create functional
						user experiences, and design practical back-end programs with
						Python.
					</p>
				</FourthLine>
				<div>
					<Contact href="#contact">Contact Me</Contact>
				</div>
			</Details>
		</IntroWrapper>
	</Wrapper>
)
