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
        width: 170px;
      }
      
      th {
        padding: 3px 0px 3px 15px;
       
      }
      
      .st-label {
        min-width: 120px;
        font-weight: 500;
      }
      
      .st-input {
        max-width: 200px;
      }
       
      .st-description {
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
  
  .st-controller {
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export default Step1Wrapper;