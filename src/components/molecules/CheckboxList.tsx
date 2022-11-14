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
  const { items, rowNumber, handleChecked, handleUnchecked } = props;

  const rows = splitArray(items, rowNumber);

  return (
    <div>
      {rows.map((row, index) => {
        return (
          <div key={index}>
            {row.map((item, index) => {
              return (
                <Checkbox
                  label={item.prefName}
                  value={item}
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
