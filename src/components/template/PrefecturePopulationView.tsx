import React, { useMemo } from 'react';
import { Prefecture } from '../../types/resas';
import { CheckboxList } from '../molecules/CheckboxList';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export type ChartData = {
  labels: string[] | number[];
  datasets: ChartDatum[];
};

export type ChartDatum = {
  label: string;
  data: number[];
  borderColor: string;
};

type Props = {
  prefectures: Prefecture[];
  handleCheck: (prefecture: Prefecture) => void;
  handleUncheck: (prefecture: Prefecture) => void;
  data: ChartData;
};

export const PrefecturePopulationView = (props: Props) => {
  const { prefectures, handleCheck, handleUncheck, data } = props;

  const options = useMemo(() => {
    return {
      plugins: {
        legend: {
          position: 'right' as const,
        },
      },
      responsive: false,
      scale: {
        x: {
          display: true,
        },
      },
    };
  }, []);

  return (
    <>
      {prefectures && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>都道府県別人口推移</h1>
          <CheckboxList
            items={prefectures}
            rowNumber={16}
            handleChecked={handleCheck}
            handleUnchecked={handleUncheck}
          />
          <Line
            options={options}
            data={data as any}
            height="600"
            width="1200"
          ></Line>
        </div>
      )}
    </>
  );
};
