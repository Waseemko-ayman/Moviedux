import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.3s;

  &:hover {
  background-color: #e7f2f1;
  color: black;
  }
`;
