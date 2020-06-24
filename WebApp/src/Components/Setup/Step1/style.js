import styled from "styled-components";

const Step1Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  padding-right: 5px;
  padding-bottom: 5px;
  
  .page-container {  
    height: 100%;
    display: flex;
    flex-flow: column;
    overflow: hidden auto;
    
    .st-form {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 100%;
      
      .db-selector {
        width: 200px;
      }
      
      th {
        padding: 3px 5px 3px 15px;
      }
    }
  }
  
  .st-controller {
    margin-top: 20px;
  }
`;

export default Step1Wrapper;