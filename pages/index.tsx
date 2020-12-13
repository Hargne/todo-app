import TodoList from "components/Todo/TodoList";
import Head from "next/head";

import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  max-width: 20rem;
  box-sizing: border-box;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Content>
          <TodoList />
        </Content>
      </Page>
    </>
  );
}
