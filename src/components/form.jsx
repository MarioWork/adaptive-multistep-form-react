import React from "react";
import styled from "styled-components";
import { shape, string, number, arrayOf } from "prop-types";
import useMultiStepForm from "../hooks/use-multi-step-form";

const Form = ({ form }) => {
  const { group, onNext, onPrevious } = useMultiStepForm(form);
  return (
    <StyledForm>
      <h1>{form?.title}</h1>
      <StyledGroup>
        <h4>{group?.title}</h4>
        <main></main>
        <footer>
          <button onClick={onPrevious}>previous</button>
          <button onClick={onNext}>next</button>
        </footer>
      </StyledGroup>
    </StyledForm>
  );
};

Form.propTypes = {
  form: shape({
    id: number,
    title: string,
    groups: arrayOf(
      shape({
        id: number,
        title: string,
        questions: arrayOf(
          shape({
            id: number,
            title: string,
            type: string,
          })
        ),
      })
    ),
  }),
};

const StyledForm = styled.main`
  width: 500px;
  min-height: 600px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 1px solid black;
  border-radius: 25px;
`;

const StyledGroup = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 0.5em;

  main {
    width: 100%;
    max-width: 100%;
    min-height: 75%;
    max-height: 75%;
    display: flex;
    margin: 1em;
    padding: 1em;
    flex-direction: column;
    overflow-y: auto;
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 10%;

    button {
      height: 40px;
      width: 150px;
    }
  }
`;

export default Form;
