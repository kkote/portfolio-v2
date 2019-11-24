import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import * as data from 'data/myinfo.json'
import * as dataconfig from 'data/config'
import {
	Wrapper,
	IntroWrapper,
	Details,
	Thumbnail,
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
				{/* <h1>Hi There!</h1>
				<h4>{data.name}</h4>
				<h4>{dataconfig.defaultDescription}</h4>
				<Button as={AnchorLink} href="#contact">
					Contact Me
				</Button> */}

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
			{/* <Thumbnail>
				<img src={dev} alt={dataconfig.defaultDescription} />
			</Thumbnail> */}
		</IntroWrapper>
	</Wrapper>
)
