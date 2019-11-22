import styled from 'styled-components'


export const Header = styled.h2`
position: relative;
display: flex;
-moz-box-align: center;
align-items: center;
margin: 10px 0px 40px;
width: 100%;
font-size: 32px;
white-space: nowrap;

	color:rgb(41,132,110);
	align-self: start;

	::after {
		content: "";
		display: block;
		height: 1px;
		width: 300px;
		background-color: 
		rgb(45, 57, 82);
		position: relative;
		
		margin-left: 20px;
	}

	@media (max-width: 768px) {
		::after {
			width: 200px;
		}
	}
`


