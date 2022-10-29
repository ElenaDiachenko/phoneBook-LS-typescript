import { FC, ChangeEvent } from 'react';
import { Label, Input, Wrapper } from './Filter.styled';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: FC<IProps> = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label>
        Find contact by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Wrapper>
  );
};
