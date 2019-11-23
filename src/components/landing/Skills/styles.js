import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	

	@media (max-width: 960px) {
		flex-direction: column;
	}
`


export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;
	width: 60%;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 1.4em;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
`

export const Thumbnail = styled.div`
	flex: 1;
	width: 40%;

	@media (max-width: 960px) {
		width: 85%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`

export const List = styled.ul`
list-style-type: circle;
columns: 3;
-webkit-columns: 3;
-moz-columns: 3;

padding-left: 1.2rem;


`