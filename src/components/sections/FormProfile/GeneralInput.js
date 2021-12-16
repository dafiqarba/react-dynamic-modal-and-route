import { FormGroups, FormGroup, Label, Input } from 'style/sections/FormProfile-styled';

const GeneralInput = ({ onChange, onUpload, userData }) => {
  return (
    <FormGroups>
      <FormGroup>
        <Label>Nama Lengkap </Label>
        <Input onChange={onChange} type="text" name="name" value={userData.name}/>
      </FormGroup>
      <FormGroup>
        <Label>Tanggal Lahir</Label>
        <Input onChange={onChange} type="date" name="birthdate" value={userData.birthdate}/>
      </FormGroup>
      <FormGroup>
        <Label>Pendidikan</Label>
        <Input onChange={onChange} type="text" name="education" value={userData.education}/>
      </FormGroup>
      <FormGroup>
        <Label>Nomor HP</Label>
        <Input onChange={onChange} type="number" name="phone" value={userData.phone}/>
      </FormGroup>
      <FormGroup>
        <Label>Github</Label>
        <Input onChange={onChange} type="text" name="git" value={userData.git}/>
      </FormGroup>
      <FormGroup>
        <Label>Instagram</Label>
        <Input onChange={onChange} type="text" name="insta" value={userData.insta}/>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input onChange={onChange} type="text" name="email" value={userData.email}/>
      </FormGroup>
      <FormGroup>
        <Label>Upload Foto</Label>
        <Input onChange={onUpload} type="file" name="avatar"/>
      </FormGroup>
    </FormGroups>
  );
};

export default GeneralInput;
