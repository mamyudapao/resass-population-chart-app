import Axios from 'axios';
import {
  ResasPrefectureListResponse,
  ResasPrefecturePopulationResponse,
} from '../../types/resas';

const axios = Axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp',
  headers: {
    'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY,
  },
});

export const resasClient = {
  getPrefectures: async () => {
    const response = await axios.get<ResasPrefectureListResponse>(
      '/api/v1/prefectures'
    );
    return response.data;
  },
  getPrefecturePopulation: async (prefCode: number) => {
    const response = await axios.get<ResasPrefecturePopulationResponse>(
      '/api/v1/population/composition/perYear',
      {
        params: {
          cityCode: '-',
          prefCode,
        },
      }
    );
    return response.data;
  },
};
