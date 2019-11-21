import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #212121;

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 32pt;
		font-weight: normal;
		color: #707070;

		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`
export const FirstLine = styled.div`
	font-size: 13px;
	color: rgb(41,132,110);
	margin: 0px 0px 20px 3px;
	font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
	font-weight: normal;
`

export const SecondLine = styled.div`
	font-size: 45px;
	margin: 0px;
	line-height: 1.1;
	color: rgb(41,132,110);
	font-weight: 500;
`

export const ThirdLine = styled.div`
	font-size: 45px;
	margin: 0px 0px 10px;
	line-height: 1.1;
	color: rgb(136, 146, 176);
	
`
export const FourthLine = styled.div`
	font-size: 16px;
	margin-top: 25px;
	
	p {
		margin: 0px 0px 15px;
		color: rgb(136, 146, 176);
	}
`

export const Contact = styled.a`
	color: inherit;
	background-color:
	transparent;
	border: 1px solid rgb(41, 132, 110);
	border-radius: 3px;
	padding: 1.25rem 1.75rem;
	font-size: 14px;
	font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
	margin-top: 50px;
	display: inline-block;
`