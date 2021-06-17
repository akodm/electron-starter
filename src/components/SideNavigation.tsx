import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import { sideNavigationState } from '@atoms/sideNavigation.atom';

interface IBar {
  show: boolean;
}

const Bar = styled.div<IBar>`
  width: 250px;
  height: 100vw;
  top: 0;
  left: 0;
  background-color: gray;
  position: fixed;
  z-index: 9999;
  transition-property: transfrom;
  transition: ease 0.6s 0s;

  ${props => props.show ?
    css`
      transform: translateX(0px);
    `
    :
    css`
      transform: translateX(-250px);
    `
  }
`;

export type SideNavigationProps = {

};

export const SideNavigation = (props: SideNavigationProps) => {
  const [show, set] = useRecoilState(sideNavigationState);

  return <Bar show={show} onClick={() => set(false)}>
    Side Bar.
  </Bar>
};