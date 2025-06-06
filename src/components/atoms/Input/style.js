import styled from "styled-components";

export const StyledInput = styled.div`
  .textarea {
    border-radius: 0 !important;
  }
  
  :is(input:not([type="checkbox"]), textarea) {
    width: 100%;
    font-size: 16px;
    padding: 15px;
    color: #fff;
    background-color: inherit;
    outline: none;
    border: none;
  }

  input:not([type="checkbox"]) {
    flex: 1;
    height: 100%;
    border-radius: 100px;
  }

  input:-webkit-autofill {
    color: #fff !important;
    background-color: #4a4a4a;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill:focus {
    border-color: gold;
  }

  textarea {
    height: 120px;
    resize: none;
    border-radius: 10px !important;
  }

  .checkbox {
    display: flex;
    gap: 10px;
  }

  .checkbox a {
    color: #ffa100;
    background-color: transparent;
    border-radius: 0 !important;
    box-shadow: none;
    padding: 0;
    transition: all 0.3s;
  }

  .checkbox a:hover {
    text-decoration: underline;
  }

  label.custom__checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  label.custom__checkbox input {
    display: grid;
    place-content: center;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    transition: background-color 0.3s, border-color 0.3s;
    position: relative;
    cursor: pointer;
  }

  label.custom__checkbox input::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
  }

  label.custom__checkbox input:checked {
    background-color: #ffa100;
    border-color: #ffa100;
  }

  label.custom__checkbox input:checked::before {
    transform: scale(1);
  }
`;

export const StyledInputWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  border-radius: 100px;
  background-color: #272727;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  transition: all 0.3s;

  &:focus-within {
    border-color: #ffa100 !important;
  }

  img {
    width: 40px;
    padding-right: 15px;
    cursor: pointer;
  }

  @media (max-width: 496px) {
    border-radius: 8px;
  }
`;
