import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";

interface ContainerProps {
  children: React.ReactNode;
  row?: string;
  wrap?: string;
}

export const StyledContainer = styled.div`
  padding: ${softexTheme.spacing.large};
`;

const Container = ({ children, row, wrap }: ContainerProps) => {
  return (
    <StyledContainer
      style={{
        display: row ? "flex" : "block",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
