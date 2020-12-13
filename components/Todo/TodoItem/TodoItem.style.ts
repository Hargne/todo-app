import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Content = styled.div<{ isComplete?: boolean }>`
  width: 100%;
  font-size: 1rem;
  padding-bottom: 1rem;
  opacity: ${(props) => (props.isComplete ? 0.5 : 1)};
  background: #ffff99;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 0.3rem 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CompleteButton = styled.div<{ isTicked?: boolean }>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.isTicked ? "#999" : "#fff")};
  border: 0.1rem solid #999;
  height: 1rem;
  width: 1rem;
  font-size: 0.6rem;
  margin-right: 1rem;
  transition: all 0.3s;
`;

export const Text = styled.div<{ strikeThrough?: boolean }>`
  text-decoration: ${(props) =>
    props.strikeThrough ? "line-through" : "none"};
`;

export const Action = styled.div<{ type?: "destructive" }>`
  color: ${(props) => (props.type === "destructive" ? "#CC0C0C" : "#20cef5")};
  font-weight: bold;
  border-radius: 0.25rem;
  font-size: 0.75rem;
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: flex-end;
`;
