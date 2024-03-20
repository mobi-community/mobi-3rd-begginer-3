import { yupResolver } from '@hookform/resolvers/yup';
import { AboutYup } from '../../common/yupCondition';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import FormInput from '../../common/formInput';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const AboutMeSchema = yup.object().shape({
    AboutMe: AboutYup,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(AboutMeSchema) });
  const onSubmitFnc = (data) => {
    const totalData = {
      ...location.state,
      ...data,
    };
    alert(JSON.stringify(totalData, null, 2));
    navigate('/Ph_Birth');
  };
  return (
    <form onSubmit={handleSubmit(onSubmitFnc)}>
      <FormInput
        placeholder="본인을표현해주는글을 작성해주세요 글자수-100~300이내로"
        register={register}
        name="AboutMe"
        errors={errors}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};
export default AboutMe;
