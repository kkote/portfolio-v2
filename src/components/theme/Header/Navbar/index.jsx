import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import * as dataconfig from 'data/config';

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">{dataconfig.defaultTitle}</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
