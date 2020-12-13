import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputField = styled.input<{ error?: boolean }>`
  padding: 1rem 1.25rem;
  border: 0.15rem solid ${(props) => (!props.error ? "#eeeeee" : "#CC0C0C")};
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
  outline: none;
  background-color: #eeeeee;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  text-transform: uppercase;
  border: 0;
  background-color: #20cef5;
  color: #ffffff;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  box-shadow: 0 0.25rem 0 #07b5dc;
`;
