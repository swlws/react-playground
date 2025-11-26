import {
  GRID_ID_ENUM,
  GRID_LEFT_MARGIN,
  GRID_RIGHT_MARGIN,
} from '../constant/key';

export function getDefaultGrid() {
  return [
    {
      id: GRID_ID_ENUM.MAIN,
      left: GRID_LEFT_MARGIN,
      right: GRID_RIGHT_MARGIN,
      top: '2%',
      height: '60%',
    },
    {
      id: GRID_ID_ENUM.FOOTER,
      left: GRID_LEFT_MARGIN,
      right: GRID_RIGHT_MARGIN,
      top: '70%',
      height: '20%',
    },
  ];
}
