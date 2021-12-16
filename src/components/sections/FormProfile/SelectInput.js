import { FormGroups, FormGroup, Label, InputRadioGroup } from 'style/sections/FormProfile-styled';
import { InputRadio, LabelRadio, RadioButton } from 'style/sections/FormProfile-styled';
import { InputSelectGroup, Select } from 'style/sections/FormProfile-styled';

const SelectInput = ({ onChange, userData }) => {
  return (
    <FormGroups>
      <FormGroup>
        <Label>Jenis Kelamin</Label>
        <InputRadioGroup>
          <InputRadio
            name="gender"
            onChange={onChange}
            id="laki-laki"
            value="Laki-laki"
            checked={userData.gender === 'Laki-laki'}
          />
          <LabelRadio htmlFor="laki-laki">
            <RadioButton />
            Laki-laki
          </LabelRadio>
        </InputRadioGroup>
        <InputRadioGroup>
          <InputRadio
            name="gender"
            onChange={onChange}
            id="perempuan"
            value="Perempuan"
            checked={userData.gender === 'Perempuan'}
          />
          <LabelRadio htmlFor="perempuan">
            <RadioButton />
            Perempuan
          </LabelRadio>
        </InputRadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>Agama</Label>
        <InputSelectGroup>
          <Select onChange={onChange} name="religion" value={userData.religion} >
            <option value=""></option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
          </Select>
        </InputSelectGroup>
      </FormGroup>
    </FormGroups>
  );
};

export default SelectInput;
