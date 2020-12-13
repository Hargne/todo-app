import { StoreProvider } from "store/store";
import GlobalStyle from "styles/global";

function TodoApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default TodoApp;
