import styled from "styled-components";
import { softexTheme } from "../../../css/themes/softexTheme";
import { reposivityQuery } from "../../../css/themes/reposivityQuery";

export const StyledCard = styled.section`
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: ${softexTheme.spacing.medium};
  margin: ${softexTheme.spacing.medium} 0;
  width: 300px;

  ${reposivityQuery.tablet} {
    width: 30%;
  }

  ${reposivityQuery.mobile} {
    width: 100%;
  }

  div {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
  }
`;

export const StyledContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${softexTheme.spacing.large};
  margin: 0 auto;
  max-width: 1200px;
`