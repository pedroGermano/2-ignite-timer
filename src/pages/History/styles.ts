import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 3.5rem;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
`;
