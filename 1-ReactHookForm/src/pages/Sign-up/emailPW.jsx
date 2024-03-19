import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailYup, PassWordYup } from '../../common/yupCondition';
import FormInput from '../../common/formInput';
const EmailPW = () => {
  const schema = yup.object().shape({
    email: EmailYup,
    PassWord: PassWordYup,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <FormInput placeholder="email" register={register} shapeKey="email" errors={errors} />
        <FormInput placeholder="passWord" register={register} shapeKey="PW" errors={errors} />
        <button type="submit">다음</button>
      </form>
    </div>
  );
};

export default EmailPW;
