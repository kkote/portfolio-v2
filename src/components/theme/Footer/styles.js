import styled from 'styled-components'
import footerSvg from 'assets/illustrations/footer.svg';


export const Wrapper = styled.div`
	padding: 28rem 0 4rem 0;
	width: 100vw;
	position: relative;
	margin-left: -50vw;
	left: 50%;
	background: #17252a;
	color:white;
	

	a {
		
		color: #3aafa9;
	}

	@media (max-width: 1960px) {
		padding: 10rem 0 4rem;
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`

export const Links = styled.div`
	display: flex;
	align-items: center;

	a {
		margin: 0 0.5rem;
		height: 2em;
		width: 2em;
		padding-right: 1em;

		img {
			margin: 0;
			height: 2em;
		width: 2em;
		filter: saturate(100%) grayscale(100%);
			
		}

		&:first-child,
		&:last-child {
			margin: 0;
		}
	}
`

export const Details = styled.div`
	@media (max-width: 680px) {
		margin-bottom: 2rem;
	}
`
