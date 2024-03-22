import { useRef } from "react";
import { useForm } from "react-hook-form";

const RHFStep = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        name="email"
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>이메일을 입력해주세요</p>}

      <label>Name</label>
      <input
        name="name"
        {...register("name", { required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required" && (
        <p> 이름을 입력해주세요</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p> 최대 길이를 초과하였습니다.</p>
      )}

      <label>Password</label>
      <input
        name="password"
        type="password"
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p> 비밀번호를 입력해주세요</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p> 최소 6글자 이상 입력해주세요</p>
      )}

      <label>Password Confirm</label>
      <input
        type="password"
        name="password_confirm"
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm &&
        errors.password_confirm.type === "required" && (
          <p> 비밀번호를 한 번 더 입력해주세요</p>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <p>비밀번호가 일치하지 않습니다</p>
        )}

      <input type="submit" style={{ marginTop: "40px" }} />
    </form>
  );
};
export default RHFStep;
