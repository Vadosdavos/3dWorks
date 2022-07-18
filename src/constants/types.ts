import { settingsState } from '../store/slices/settingsSlice';

export type statePropsType = {
  state: settingsState;
};

export enum TargetType {
  deckColor = 'deckColor',
  texture = 'texture',
  bgColor = 'bgColor',
  wheelsColor = 'wheelsColor',
}