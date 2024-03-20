import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailYup, PassWordYup } from '../../common/yupCondition';
import FormInput from '../../common/formInput';
import { useNavigate, useSearchParams } from 'react-router-dom';
const EmailPW = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: EmailYup,
    passWord: PassWordYup,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmitFnc = (data) => {
    setSearchParams(data);
    navigate('/Ph_Birth', { state: { ...data } });
  };
  if (searchParams.get('email')) {
    setValue('email', searchParams.get('email'));
  }
  if (searchParams.get('passWord')) {
    setValue('passWord', searchParams.get('passWord'));
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFnc)}>
        <FormInput placeholder="email" register={register} name="email" errors={errors} />
        <FormInput placeholder="passWord" register={register} name="passWord" errors={errors} />
        <button type="submit">다음</button>
      </form>
    </div>
  );
};

export default EmailPW;
