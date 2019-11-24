import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json';
import githubIcon from 'assets/icons/github.svg';
import linkedinIcon from 'assets/icons/linkedin.svg';
import * as data from 'data/config';

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>{data.defaultTitle}</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Made 
					by{' '}
					<a
						href={data.socialLinks.github}
						rel="noopener noreferrer"
						target="_blank"
					>
						{data.author}
					</a>
				</span>
			</Details>
			<Links>
				{/*{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img  src={icon} alt="alt" /> 
					</a>
				))} */}
				<a		href="https://github.com/kkote"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img  src={githubIcon} alt="alt" /> 
					</a>
					<a		href="https://www.linkedin.com/in/kkote/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img  src={linkedinIcon} alt="alt" /> 
					</a>

			</Links>
		</Flex>
	</Wrapper>
)
