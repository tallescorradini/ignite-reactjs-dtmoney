import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Form = styled.form`
  h2 {
    margin-bottom: 2rem;

    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border: 0;
    border-radius: 0.25rem;
    background-color: var(--green);

    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    margin-left: 1rem;

    font-size: 1rem;
    color: var(--text-title);
  }
`;
