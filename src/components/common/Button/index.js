import styled from 'styled-components'

export const Button = styled.button`
	color: inherit;
	background-color: transparent;
	border: .15rem solid rgb(41,132,110);
	border-radius: 3px;
	padding: 1.25rem 1.75rem;
	font-size: 15px;
	line-height: 1;
	-webkit-text-decoration: none;
	text-decoration: none;
	cursor: pointer;
	-webkit-transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1) 0s;
	transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1) 0s;
	margin-top: 50px;
	display: inline-block;

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: transparent;
	`}
`
