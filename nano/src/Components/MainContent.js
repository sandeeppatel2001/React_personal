import styled from "styled-components";

import Left from "./Left";
import Right from "./Right";
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1px;
  background: black; /* Background color */
`;

const Inner = styled.div`
  display: flex;
`;

// const RContent = styled.p`
//   //   font-family: "Playfair Display", serif;
//   font-size: 20px;
//   color: white; /* Text color */
//   padding-left: 2%;
// `;

const MainContent = () => {
  return (
    <ContentWrapper>
      <Inner>
        <Left></Left>
        <Right></Right>
      </Inner>
    </ContentWrapper>
  );
};

export default MainContent;
