import React from "react";
import styled from "styled-components";
import formSchema from "../schemas/form-prop-types";
import useMultiStepForm from "../hooks/use-multi-step-form";
import QuestionList from "./question/question-list";

const Form = ({ form }) => {
  const { group, onNext, onPrevious } = useMultiStepForm(form);

  return (
    <StyledForm>
      <h1>{form.title}</h1>
      {form?.description && <h5>{form.description}</h5>}
      <StyledGroup>
        <header>
          {group?.title && <h3>{group.title}</h3>}
          {group?.description && <h5>{group.description}</h5>}
        </header>
        <main>
          <QuestionList questions={group?.questions} />
        </main>
        <footer>
          <button onClick={onPrevious}>Previous</button>
          <button onClick={onNext}>Next</button>
        </footer>
      </StyledGroup>
    </StyledForm>
  );
};

Form.propTypes = formSchema;

export default Form;

const StyledForm = styled.main`
  width: 500px;
  min-height: 800px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  padding-top: 2em;
  padding-bottom: 2em;
  border-radius: 25px;
  box-shadow: rgb(153 153 153 / 25%) 10px 0px 70px;
  background: #bebebe;

  h1,
  h5 {
    opacity: 0.7;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1 {
    opacity: 1;
  }
`;

const StyledGroup = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90%;
  max-height: 90%;
  padding-top: 1em;

  header {
    min-height: 10%;
    max-height: 10%;
    max-width: 100%;
    text-align: center;

    h3,
    h5 {
      opacity: 0.7;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h3 {
      opacity: 1;
    }
  }

  main {
    width: 100%;
    max-width: 100%;
    min-height: 85%;
    max-height: 85%;
    display: flex;
    padding: 0.5em;
    flex-direction: column;
    overflow-y: auto;
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    min-height: 10%;
    max-height: 10%;

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
