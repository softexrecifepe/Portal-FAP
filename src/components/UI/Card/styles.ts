import styled from "styled-components";
import { softexTheme } from "../../../css/themes/softexTheme";

export const Styledcard = styled.section`
  width: 22.5%;
  height: 35%;
  border: 1px solid;
  border-radius: ${softexTheme.borderRadius.veryLarge};
  background-color: #f2f2f2;
  padding: 6px;
  box-shadow: 2px 2px 5px;

  div {
    img {
      height: 156.5px;
      border-radius: ${softexTheme.borderRadius.medium};
      opacity: 80%;
      box-shadow: 2px 2px 5px;
    }
    h1 {
      color: ${softexTheme.colors.primary};
      font-size: ${softexTheme.fontSizes.huge};
    }
  }
  header {
    background-color: gray;
    border-radius: 0px 0px 10px 10px;

    article {
      h1 {
        color: ${softexTheme.colors.primary};
        font-size: ${softexTheme.fontSizes.medium};
        text-align: right;
        margin-right: 5%;
      }
      p {
        text-align: right;
        font-size: ${softexTheme.fontSizes.tiny};
        font-family: ${softexTheme.fontFamily.primary};
        padding: 1px;
        margin-right: 3%;
      }
    }

    footer {
      h1 {
        color: ${softexTheme.colors.primary};
        font-size: ${softexTheme.fontSizes.medium};
        margin-left: 5%;
      }
      p {
        font-size: ${softexTheme.fontSizes.small};
        text-align: right;
        margin-right: 3%;
      }
    }
    aside {
      p {
        font-size: ${softexTheme.fontSizes.small};
        text-align: right;
        padding: 1%;
        margin-right: 3%;
      }
    }
  }
  span {
    display: flex;
    justify-content: right;
    button {
      padding: 1%;
      border: 1px solid;
      border-radius: ${softexTheme.borderRadius.small};
      background-color: #ecbc94;
      margin-right: 5%;
      margin: 5%;
      box-shadow: 2px 2px 5px;
    }
  }
`;
