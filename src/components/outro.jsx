import { useState } from "react";
import { shape, string } from "prop-types";
import Container from "./common/container";
import Button from "./common/button";
import styled from "styled-components";

const Outro = ({ outro: { title, description }, submitAnswers }) => {
  const [answers, setAnswers] = useState();

  return (
    <Container>
      <StyledOutro>
        <header>
          <h1>{title}</h1>
          <h4>{description}</h4>
        </header>
        <main>{JSON.stringify(answers, null, 2)}</main>
        <footer>
          <Button
            text="Submit"
            onClick={() => {
              const answers = submitAnswers();
              setAnswers(answers);
            }}
          />
        </footer>
      </StyledOutro>
    </Container>
  );
};

Outro.propTypes = {
  outro: shape({
    title: string.isRequired,
    description: string,
  }),
};

export default Outro;

const StyledOutro = styled.article`
  header {
    display: flex;
    flex-direction: column;
    padding: 1em;
    text-align: center;
    gap: 10px;

    h1 {
      font-weight: 700;
    }

    h4 {
      font-size: 1.1em;
    }
  }

  main {
    max-height: 100%;
    text-align: center;
  }

  footer {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
