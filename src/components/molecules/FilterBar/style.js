import styled from "styled-components";

export const StyledFilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c2c2c;
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 50px;
  }

  div label {
    cursor: pointer;
  }

  select {
    padding: 8px 0 8px 5px;
    width: 100px;
    margin: 10px;
    border-radius: 5px;
    color: #fff;
    background-color: #141414;
    cursor: pointer;
    outline: none;
  }

  @media(max-width: 496px) {
    justify-content: center;
    
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-radius: 8px;
      padding: 10px;
      width: 100%
    }
  }

  @media(max-width: 376px) {
    align-items: center;

    div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
