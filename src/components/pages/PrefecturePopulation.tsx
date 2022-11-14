import React, { useState, useEffect } from 'react';
import { resasClient } from '../../lib/axios/resas';
import { Prefecture } from '../../types/resas';
import {
  ChartData,
  ChartDatum,
  PrefecturePopulationView,
} from '../template/PrefecturePopulationView';

export const PrefecturePopulation = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<Prefecture[]>(
    []
  );

  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const addPopulationDatum = async (prefecture: Prefecture) => {
    prefecture;
    const populationData = await resasClient.getPrefecturePopulation(
      prefecture.prefCode
    );

    const population = populationData.result.data.find(
      (data) => data.label === '総人口'
    );
    if (population) {
      const chartDatum: ChartDatum = {
        label: prefecture.prefName,
        data: population.data.map((data) => data.value),
        borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
      chartData.labels.length;
      if (chartData.labels.length === 0) {
        setChartData({
          labels: populationData.result.data[0].data.map((data) => data.year),
          datasets: [chartDatum],
        });
      } else {
        const newChartData = [...chartData.datasets, chartDatum];
        setChartData(() => {
          return {
            labels: chartData.labels,
            datasets: newChartData,
          };
        });
      }
    }
  };

  const removePopulationDatum = (prefecture: Prefecture) => {
    if (chartData) {
      const newChartData: ChartData = {
        labels: chartData.labels,
        datasets: chartData.datasets.filter(
          (data) => data.label !== prefecture.prefName
        ),
      };
      setChartData(newChartData);
    }
  };
  const handleCheck = async (prefecture: Prefecture) => {
    const newSelectedPrefecture = [...selectedPrefecture, prefecture];
    addPopulationDatum(prefecture);
    setSelectedPrefecture(newSelectedPrefecture);
  };

  const handleUncheck = (prefecture: Prefecture) => {
    const newPrefectures = selectedPrefecture.filter(
      (p) => p.prefCode !== prefecture.prefCode
    );
    removePopulationDatum(prefecture);
    setSelectedPrefecture(newPrefectures);
  };

  useEffect(() => {
    (async () => {
      const prefectures = await resasClient.getPrefectures();
      setPrefectures(prefectures.result);
    })();
  }, []);

  return (
    <div>
      <PrefecturePopulationView
        prefectures={prefectures}
        handleCheck={handleCheck}
        handleUncheck={handleUncheck}
        data={chartData}
      />
    </div>
  );
};
