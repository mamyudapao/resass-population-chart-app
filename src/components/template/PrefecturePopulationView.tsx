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
import Styles from './PrefecturePopulationView.module.scss';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const options = useMemo(() => {
    return {
      plugins: {
        legend: {
          position: 'right' as const,
        },
      },
      responsive: isMobile ? true : false,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: '年度',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: '人口数',
          },
        },
      },
    };
  }, []);

  return (
    <>
      {prefectures && (
        <div className={Styles.container}>
          <h1>都道府県別人口推移</h1>
          <CheckboxList
            items={prefectures}
            rowNumber={isMobile ? 5 : 12}
            handleChecked={handleCheck}
            handleUnchecked={handleUncheck}
          />
          <Line
            options={options}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data={data as any}
            height="500"
            width="1000"
          ></Line>
        </div>
      )}
    </>
  );
};
