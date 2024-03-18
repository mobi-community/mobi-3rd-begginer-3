import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const Main = () => {
  const schema = yup.object().shape({
    email: yup.string().email('이메일 양식이 올바르지 않습니다').required('이메일을 입력해주세요'),
    PW: yup
      .string()
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).*$/, '똑바로해')
      .min(8, '8글자 이상 입력해주세요')
      .required('비밀번호를 입력해주세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
  const onsubmitFunc = (e) => {
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmitFunc)}>
        <input
          placeholder="email"
          {...register(
            'email'
            //, {
            //   required: { value: true, message: '에러발생' },
            //   minLength: {
            //     value: 4,
            //     message: '8자리이상입력해라',
            //   },
            // }
          )}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <input placeholder="P.W" {...register('PW')}></input>
        {errors.PW && <p>{errors.PW.message}</p>}
        <button type="submit">1</button>
      </form>
    </div>
  );
};

export default Main;
