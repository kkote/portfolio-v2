import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import * as data from 'data/myinfo.json';
import * as dataconfig from 'data/config';


export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>{data.name}</h4>
				<h4>{dataconfig.defaultDescription}</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt={dataconfig.defaultDescription} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
