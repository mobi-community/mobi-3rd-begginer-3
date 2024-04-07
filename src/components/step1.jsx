// Step1 컴포넌트
import { TextField, Button } from "@mui/material";
import {
  InputGroup,
  InputTitle,
  ErrorText,
  Form,
} from "../libs/styled-components/displayStyle";
import { step1Schema } from "../libs/yup/schema/step1";
import useUpdateForm from "../hooks/useUpdateForm";

const Step1 = ({ formData, setFormData, next }) => {
  /* const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(step1Schema),
  }); */
  const { register, handleSubmit, onSubmit, errors, isValid } = useUpdateForm(
    formData,
    step1Schema,
    next
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputTitle>이메일</InputTitle>
        <TextField
          {...register("email")}
          name="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          type="email"
          size="small"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      <InputGroup>
        <InputTitle>비밀번호</InputTitle>
        <TextField
          {...register("password")}
          name="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          size="small"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

      <InputGroup>
        <InputTitle>비밀번호 확인</InputTitle>
        <TextField
          {...register("passwordConfirm")}
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          size="small"
          value={formData.passwordConfirm}
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm.message}</ErrorText>
      )}
      <Button type="submit" variant="outlined" disabled={!isValid}>
        Next
      </Button>
    </Form>
  );
};

export default Step1;
