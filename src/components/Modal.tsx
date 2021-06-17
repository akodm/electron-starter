import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import { modalState } from '@atoms/modal.atom';

interface IContainer {
  show: boolean;
}

const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10000;

  ${props => props.show ?
    css`
      transform: scale(1);
    `
    :
    css`
      transform: scale(0);
    `
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.7);
  position: absolute;
`;

const Content = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 500px;
  background-color: white;
  position: absolute;
  transition-property: transform, opacity;
  transition: ease 0.6s 0s;

  ${props => props.show ?
    css`
      opacity: 1;
      transform: translateY(0);
    `
    :
    css`
      opacity: 0;
      transform: translateY(100px);
    `
  }
`;

export type ModalProps = {
  children?: React.ReactNode;
  drop?: boolean;
};

export const Modal = (props: ModalProps) => {
  const { children, drop = true } = props;
  const [show, set] = useRecoilState(modalState);

  const onClose = useCallback(() => drop && set(false), [set, drop]);

  return <Container show={show}>
    <Background onClick={onClose}/>
    <Content show={show}>
      {children}
    </Content>
  </Container>
};