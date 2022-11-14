export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type ResasPrefectureListResponse = {
  message: null;
  result: Prefecture[];
};

export type ResasPrefecturePopulationResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: ResasPrefecturePopulationLabel;
      data: ResasPrefecturePopulationData[];
    }[];
  };
};

export type ResasPrefecturePopulationData = {
  year: number;
  value: number;
};

export type ResasPrefecturePopulationLabel =
  | '総人口'
  | '年少人口'
  | '生産年齢人口'
  | '老年人口';
