import styled from "styled-components";

export const FormContainer = styled.div`
  padding-left: 18rem;
  width: 50rem;
  height: 100%;
  margin: 2rem auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  background-color: #4e4e4e8b;
  color: white;

  div {
    width: 80%;
  }
  label {
    font-size: 2rem;
    display: block;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 1rem;
    background-color: #000000ab;
    opacity: 0.5;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px -1px rgba(255, 255, 255, 0.47);
    color: white;
    font-size: 1.5rem;
  }

  textarea {
    width: 100%;
    height: 15rem;
    padding: 1rem;
    background-color: #000000ab;
    opacity: 0.5;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px -1px rgba(255, 255, 255, 0.47);
    color: white;
    font-size: 1.5rem;
  }

  button {
    width: 100%;
    height: 4rem;
    background-color: #056cf2;
    border-radius: 1rem;
    border: none;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
  p {
    color: #ff7a7a;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;
