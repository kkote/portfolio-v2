import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
	
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

	h4 {
		color: #212121;
		font-family: 'Nunito Sans', sans-serif;
	}

	p {
		color: #707070;
		font-family: 'Lato', sans-serif;
	}
`

export const Content = styled.div`
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	img {
		height: 30px;
		width: 30px;
		filter: saturate(100%) hue-rotate(-75deg);
	}

	p {
		max-width: 85%;
		color:  #0a192f;
	}
	
`

export const Icons = styled.div`
	display: flex;
	justify-content: flex-end;

	a {
		padding-right: .5rem;
	}
`

export const Lang = styled.ul`
	display: inline-flex;flex-wrap: wrap;
	width: 100%;
	justify-content: flex-start;
	list-style-type: none;
	font-size: 14px;
    font-family: 'Questrial', sans-serif;




	li {
		margin-right: 15px;
		margin-bottom: 0px;
		color: #333f58;
	}
`
