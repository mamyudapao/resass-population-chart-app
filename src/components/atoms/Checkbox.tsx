import React from 'react';
import Styles from './Checkbox.module.scss';

type Props = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChecked: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUnchecked: (value: any) => void;
};

export const Checkbox = (props: Props) => {
  const { label, value, handleChecked, handleUnchecked } = props;

  return (
    <>
      <input
        type="checkbox"
        className={Styles.checkbox}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          if (target.checked) {
            handleChecked(value);
          } else {
            handleUnchecked(value);
          }
        }}
      />

      <label>{label}</label>
    </>
  );
};
