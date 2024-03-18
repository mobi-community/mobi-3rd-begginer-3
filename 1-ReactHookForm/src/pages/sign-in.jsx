import * as yup from 'yup';
const SignIn = () => {
  const SignInSchema = yup.object().shape({
    phone: yup.string().matches(/^01([0|1])-?([0-9]{3,4})-?([0-9]{4})$/),
    birthday: yup.string(),
  });
  return <div></div>;
};
export default SignIn;
///뒤로가기 react router dom -history
///
