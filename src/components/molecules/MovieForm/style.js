import styled from "styled-components";

export const StyledMovieForm = styled.form`
  margin-top: 25px;

  div {
    margin-bottom: 15px;
  }

  label {
    color: #fff;
    display: block;
    font-size: 17px;
    margin-bottom: 10px;
  }

  .file_upload_wrapper {
    color: #fff;
    max-width: 100%;
    width: 100%;
    border-radius: 100px;
    background-color: #272727;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 15px;
    overflow: hidden;
  }

  span {
    font-size: 14px;
    flex: 1;
  }

  span + label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  i {
    display: block;
    font-size: 20px;
    transition: all 0.3s;
  }

  span + label:hover i {
    color: #ffa100;
  }

  .file_upload_input {
    display: none;
  }

  .error {
    display: block;
    margin-top: 10px;
    color: red;
  }
`;