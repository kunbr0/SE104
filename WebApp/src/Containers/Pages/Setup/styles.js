import styled from "styled-components";
import bgImage from "../../../Assets/img/form-wizard-bg.jpg"

const SetupPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  height: 100vh;
  background-image: url("${bgImage}");
  background-size: cover;
  
  .setup-container {
      width: 675px;
      height: 450px;   
      display: flex;   
      border-radius: 5px;
      box-shadow: 1px 1px 5px gray;
      background: white;
      
      .left-side {
        background: #344a72;
        min-width: 230px;
        border-radius: 5px 0 0 5px;
        padding: 0px 15px;
        display: flex;
        flex-flow: column;
        position: relative;
        
        .header {
          height: 50px;
          min-height: 50px;
        }
        
        .content {
          height: 100%;
          color: white;
          z-index: 10;
          
          h3 {
            color: white;
          }          
          
          .particle {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
        }
        
        .footer {
          display: flex;
          justify-content: center;
          color: #cadbde;
        }
      }
      
      .right-side {
        display: flex;
        flex-flow: column;
        width: 100%;
        height: 100%;
        padding: 5px 0 5px 10px;
        
        .title {
          margin-bottom: 0;
          width: 100%;
          border-bottom: 1px solid #bababa;
          color: #344a72;
        }
      }
  }
`;

export default SetupPageWrapper;

export const StepWrapper = styled.div`  
  width: 100%;
  height: 100%;
  padding-top: 5px;
  overflow: hidden auto;
`;