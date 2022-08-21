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
				<ThirdLine>A Python & JavaScript developer.</ThirdLine>
				<FourthLine>
					<p>
						I build automated test solutions, 
						front-end web applications with React, 
						and extract data with Python scripts.
					</p>
				</FourthLine>
				<div>
					<Contact href="#contact">Contact Me</Contact>
				</div>
			</Details>
		</IntroWrapper>
	</Wrapper>
)
