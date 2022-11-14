import React from 'react';
import { splitArray } from '../../utils/array/splitArray';
import { Checkbox } from '../atoms/Checkbox';

type Props = {
  rowNumber: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChecked: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUnchecked: (value: any) => void;
};

export const CheckboxList = (props: Props) => {
  const { items, rowNumber: rowItems, handleChecked, handleUnchecked } = props;

  const rows = splitArray(items, rowItems);

  return (
    <div>
      {rows.map((prefectures, index) => {
        return (
          <div key={index}>
            {prefectures.map((prefecture, index) => {
              return (
                <Checkbox
                  label={prefecture.prefName}
                  value={prefecture}
                  handleChecked={handleChecked}
                  handleUnchecked={handleUnchecked}
                  key={index}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
