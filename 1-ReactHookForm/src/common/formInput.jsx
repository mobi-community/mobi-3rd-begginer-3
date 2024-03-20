const FormInput = ({ register, name, errors, ...rest }) => {
  return (
    <div>
      <input {...register(name)} {...rest} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};
export default FormInput;
