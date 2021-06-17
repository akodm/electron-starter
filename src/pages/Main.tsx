import { useSetRecoilState } from "recoil";
import { sideNavigationState } from '@atoms/sideNavigation.atom';

const Main = () => {
  const open = useSetRecoilState(sideNavigationState);

  return <div>
    <button onClick={() => open(true)}>SideBar</button>
  </div>
};

export default Main;