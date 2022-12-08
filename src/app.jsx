import { form } from "../data/form.json";
import styled from "styled-components";
import useMultiStepForm from "./hooks/use-multi-step-form";

const App = () => {
  const { group, onNext, onPrevious } = useMultiStepForm(form);

  return (
    <StyledGroup>
      {group?.title}
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </StyledGroup>
  );
};

export default App;

const StyledGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
