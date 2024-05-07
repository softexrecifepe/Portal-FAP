import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";
import { reposivityQuery } from "../../css/themes/reposivityQuery";
import { HiCursorClick } from "react-icons/hi";


export const StyledInfoTitle = styled.p`
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;

  color: ${softexTheme.textColors.secondary};
  padding: ${softexTheme.spacing.medium};
  font-weight: ${softexTheme.fontWeights.bold};

  ${reposivityQuery.desktop} {
    font-size: ${softexTheme.fontSizes.veryLarge};
    padding: ${softexTheme.spacing.large};
    margin: ${softexTheme.spacing.veryLarge};
    strong {
      color: ${softexTheme.colors.primary};
    }

    hr {
      width: 100%;
      border: 2px solid ${softexTheme.colors.primary};
      margin-top: ${softexTheme.spacing.medium};
    }
  }

  ${reposivityQuery.tablet} {
    font-size: ${softexTheme.fontSizes.large};
    margin: ${softexTheme.spacing.large};
    strong {
      color: ${softexTheme.colors.primary};
    }
    hr {
      border: 1px solid ${softexTheme.colors.primary};
      margin-top: ${softexTheme.spacing.medium};
    }
  }

  ${reposivityQuery.mobile} {
    font-size: ${softexTheme.fontSizes.medium};
    margin: ${softexTheme.spacing.large};
    strong {
      color: ${softexTheme.colors.primary};
    }
    hr {
      border: 1px solid ${softexTheme.colors.primary};
      margin-top: ${softexTheme.spacing.medium};
    }
  }
`;

const InfoTitle = () => {
  return (
    <>
      <StyledInfoTitle className="hvr-bob">
        Fique Por <strong>Dentro</strong>
        <HiCursorClick size={40} color={softexTheme.colors.quaternary} />
      </StyledInfoTitle>
      <hr />
    </>
  );
};

export default InfoTitle;
