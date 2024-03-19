import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BirthdayYup, PhoneYup } from '../../common/yupCondition';
import FormInput from '../../common/formInput';
const PhBirth = () => {
  const SignInSchema = yup.object().shape({
    phone: PhoneYup,
    birthday: BirthdayYup,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(SignInSchema) });

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <FormInput placeholder="010-0000-0000형식" register={register} shapeKey="phone" errors={errors} />
        <FormInput placeholder="YYYY-MM-DD" register={register} shapeKey="birthday" errors={errors} />
        <button type="submit">다음</button>
      </form>
    </div>
  );
};
export default PhBirth;
///뒤로가기 react router dom -history
///
