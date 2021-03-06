import React from "react";
import styled from "styled-components";

const Suggestion = ({
  book,
  input,
  category,
  isSelected,
  onClick,
  onMouseEnter,
}) => {
  let cutIndex =
    book.title.toLowerCase().search(input.toLowerCase()) + input.length;

  const firstHalf = book.title.slice(0, cutIndex);
  const secondHalf = book.title.slice(cutIndex);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      style={{ background: isSelected ? "lightyellow" : "transparent" }}
    >
      <span>
        {firstHalf}
        <Prediction>{secondHalf}</Prediction>
      </span>
      <Category>{category.name}</Category>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 5px;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.p`
  margin-top: 4px;
  color: purple;
  font-size: 0.8em;
  font-style: italic;
`;

export default Suggestion;
