import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BirthdayYup, PhoneYup } from '../../common/yupCondition';
import FormInput from '../../common/formInput';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
const PhBirth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const SignInSchema = yup.object().shape({
    phone: PhoneYup,
    birthday: BirthdayYup,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(SignInSchema) });
  const onSubmitFnc = (data) => {
    const totalData = {
      ...location.state,
      ...data,
    };
    setSearchParams(totalData);
    navigate('/AboutMe', { state: { ...totalData } });
  };
  if (searchParams.get('email')) {
    setValue('phone', searchParams.get('phone'));
  }
  if (searchParams.get('passWord')) {
    setValue('birthday', searchParams.get('birthday'));
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFnc)}>
        <FormInput placeholder="010-0000-0000형식" register={register} name="phone" errors={errors} />
        <FormInput placeholder="YYYY-MM-DD" register={register} name="birthday" errors={errors} />
        <button type="submit">다음</button>
      </form>
    </div>
  );
};
export default PhBirth;
///뒤로가기 react router dom -history
///
