import { Button, Input, TextField } from "@mui/material";
import {
  InputGroup,
  InputTitle,
  ErrorText,
  Form,
} from "../libs/styled-components/displayStyle";
import { step2Schema } from "../libs/yup/schema/step2";
import useUpdateForm from "../hooks/useUpdateForm";

const Step2 = ({ formData, setFormData, next, prev }) => {
  const { register, handleSubmit, onSubmit, errors, isValid } = useUpdateForm(
    formData,
    step2Schema,
    next,
    prev
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputTitle>핸드폰 번호</InputTitle>
        <TextField
          {...register("phone")}
          name="phone"
          id="phone"
          placeholder="010-0000-0000"
          size="small"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}

      <InputGroup>
        <InputTitle>생년월일</InputTitle>
        <TextField
          {...register("birth")}
          name="birth"
          id="birth"
          placeholder="YYYY-MM-DD"
          size="small"
          value={formData.birth}
          onChange={(e) => setFormData({ ...formData, birth: e.target.value })}
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.birth && <ErrorText>{errors.birth.message}</ErrorText>}

      <InputGroup>
        <Button
          type="button"
          variant="outlined"
          onClick={prev}
          sx={{ marginRight: "20px" }}
        >
          Prev
        </Button>
        <Button type="submit" variant="outlined" disabled={!isValid}>
          Next
        </Button>
      </InputGroup>
    </Form>
  );
};
export default Step2;
