import { form } from "../data/form.json";

import styled from "styled-components";
import Form from "./components/form";

const App = () => {
  return (
    <StyledContent>
      <Form form={form} />
    </StyledContent>
  );
};

export default App;

const StyledContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 5em;
`;
