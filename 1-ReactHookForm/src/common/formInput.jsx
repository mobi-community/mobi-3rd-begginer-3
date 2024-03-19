const FormInput = ({ register, shapeKey, errors, ...rest }) => {
  return (
    <div>
      <input {...register(shapeKey)} {...rest} />
      {errors[shapeKey] && <p>{errors[shapeKey].message}</p>}
    </div>
  );
};
export default FormInput;
