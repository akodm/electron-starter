import { selector } from 'recoil';
import { sideNavigationState } from '@atoms/sideNavigation.atom';

export const sideNavigationSelector = selector({
  key: "sideNavigationSelector",
  get: ({ get }) => {
    return get(sideNavigationState);
  },
});