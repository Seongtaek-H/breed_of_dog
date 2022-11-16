import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <h3>나에게 어울리는 견종은❓🐾</h3>
  </Container>
);

const Container = styled.div`
  background-color: white;
  border-bottom: 1px #dcdcde solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: 1.1rem;
`;

export default Header;
