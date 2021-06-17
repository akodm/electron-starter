import { useSetRecoilState } from "recoil";
import { sideNavigationState } from '@atoms/sideNavigation.atom';
import { modalState } from "@atoms/modal.atom";

const Main = () => {
  const open = useSetRecoilState(sideNavigationState);
  const show = useSetRecoilState(modalState);

  return <div>
    <button onClick={() => open(true)}>SideBar</button><span style={{ margin: "5px" }}/>
    <button onClick={() => show(true)}>Modal</button>
  </div>
};

export default Main;