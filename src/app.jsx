import { form } from "../data/form.json";

import styled from "styled-components";
import Form from "./components/form";

const App = () => {
  return (
    <StyledContent>
      <Form form={form} />
      <h6>** No Information is Stored</h6>
    </StyledContent>
  );
};

export default App;

const StyledContent = styled.div`
  width: 100vw;
  height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h6 {
    color: white;
  }
`;
