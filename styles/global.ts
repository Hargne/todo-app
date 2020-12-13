import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	html, body {
    background-color: #ffffff;
		padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
  }
  
  #__next {
    height: 100%;
  }

	a {
		color: inherit;
    text-decoration: none;
    color: #20cef5;
	}
`;
