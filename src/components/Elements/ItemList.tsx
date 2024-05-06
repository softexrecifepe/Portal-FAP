import styled from "styled-components";

interface ItemListProps {
  children: React.ReactNode;
}

const StyledItemList = styled.li``;

const ItemList = ({ children }: ItemListProps) => {
  return (
    <StyledItemList className="hvr-overline-from-center">
      {children}
    </StyledItemList>
  );
};

export default ItemList;
