import { getApiData } from '../api/getApi.js';
import { sortRaking } from '../utils/calc.js';
import { renderBoard, renderRank } from './render.js';

export const setRankData = async endpoint => {
  const response = await getApiData(endpoint);
  renderRank(sortRaking(response), endpoint);
};

export const setBoardDataList = async endpoint => {
  const response = await getApiData(endpoint);
  renderBoard(response);
};
