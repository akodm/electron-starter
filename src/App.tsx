import styled from 'styled-components';
import Routing from './pages/Routing';

import { SideNavigation } from '@components/SideNavigation';
import { Modal } from '@components/Modal';

// const electron = window.require('electron');

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Routing />
      <SideNavigation />
      <Modal />
    </Container>
  );
}

export default App;