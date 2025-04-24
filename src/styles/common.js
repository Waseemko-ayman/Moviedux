import styled from "styled-components";

export const StyledErrorMessage = styled.p`
  display: block;
  margin-top: 10px;
  color: red;
`;

export const StyledFieldsBox = styled.div`
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 17px;
  margin-bottom: 10px;

  &.custom__checkbox {
    display: initial;
  }
`;

export const StyledButtonLink = styled.button`
  color: black;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: black;
    background-color: #e7f2f1;
  }

  @media (max-width: 426px) {
    padding: 10px 15px;
  }
`;