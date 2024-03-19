import { yupResolver } from '@hookform/resolvers/yup';
import { AboutYup } from '../../common/yupCondition';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import FormInput from '../../common/formInput';

const AboutMe = () => {
  const AboutMeSchema = yup.object().shape({
    AboutMe: AboutYup,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(AboutMeSchema) });
  return (
    <form onSubmit={handleSubmit()}>
      <FormInput
        placeholder="본인을표현해주는글을 작성해주세요 글자수-100~300이내로"
        register={register}
        shapeKey="AboutMe"
        errors={errors}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};
export default AboutMe;
