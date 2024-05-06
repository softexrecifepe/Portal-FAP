import styled from "styled-components";
import { reposivityQuery } from "../../css/themes/reposivityQuery";
import { softexTheme } from "../../css/themes/softexTheme";

interface ContainerProps {
  children?: React.ReactNode;
  background?: string;
}

export const StyledContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 95%;
  border-radius: 0 0 20px 20px;
  box-shadow: ${softexTheme.boxShadow.extraLarge};

  ${reposivityQuery.desktop} {
    display: flex;
    justify-content: center;
    height: 50vh;
    margin: 0 auto;
  }

  ${reposivityQuery.tablet} {
    display: flex;
    justify-content: center;
    height: 40vh;
    margin: 0 auto;
  }

  ${reposivityQuery.mobile} {
    display: flex;
    justify-content: center;
    height: 25vh;
    margin: 0 auto;
  }
`;

const BackgroundContainer = ({ children, background }: ContainerProps) => {
  return (
    <StyledContainer style={{ backgroundImage: `url(${background})` }}>
      {children}
    </StyledContainer>
  );
};

export default BackgroundContainer;
