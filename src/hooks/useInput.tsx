import { useState } from "react";

export default (defaultValue: string | number) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};
