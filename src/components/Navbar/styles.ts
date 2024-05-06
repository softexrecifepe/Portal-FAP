import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";
import { reposivityQuery } from "../../css/themes/reposivityQuery";

export const NavHeader = styled.header`
  a {
    text-decoration: none;
    color: ${softexTheme.textColors.secondary};
  }

  font-size: ${softexTheme.fontSizes.medium};

  ${reposivityQuery.desktop} {
    padding: ${softexTheme.spacing.extraLarge};
    ul {
      display: flex;
      justify-content: space-evenly;
      gap: 70px;
      align-items: center;
      list-style: none;
      padding: ${softexTheme.spacing.small};
    }

    li {
      a {
        display: flex;
        img {
          width: 150px;
        }
      }
    }
  }

  ${reposivityQuery.tablet} {
    padding: ${softexTheme.spacing.large};
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }
    li {
      a {
        display: flex;
        img {
          width: 150px;
        }
      }
    }
  }

  ${reposivityQuery.mobile} {
    padding: ${softexTheme.spacing.small};
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      font-size: ${softexTheme.fontSizes.medium};
      padding: ${softexTheme.spacing.small};
    }

    li {
      a {
        display: flex;
        img {
          width: 125px;
        }
      }
    }
  }
`;
