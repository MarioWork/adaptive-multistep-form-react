import React from "react";
import styled from "styled-components";
import formSchema from "../domain/form-prop-types";
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
          <button onClick={onPrevious}>Previous</button>
          <button onClick={onNext}>Next</button>
        </footer>
      </StyledGroup>
    </StyledForm>
  );
};

Form.propTypes = formSchema;

const StyledForm = styled.main`
  width: 500px;
  min-height: 600px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 25px;
  box-shadow: 0px 0px 100px 0px #ffffff3f;
  background: #bebebe;
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
      border: none;
      border-radius: 25px;
      background-color: #c69749;
      color: white;
      font-size: 1em;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    button:hover {
      opacity: 0.7;
    }
  }
`;

export default Form;
