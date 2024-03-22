import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  InputGroup,
  InputTitle,
  ErrorText,
  Form,
} from "../libs/styled-components/displayStyle";
import { step2Schema } from "../libs/yup/schema/step2";

const Step2 = ({ updateForm, next, prev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(step2Schema),
  });

  const onClickPrev = (data) => {
    updateForm(data);
    sessionStorage.getItem("prevFormData");
    prev();
    console.log(data);
  };
  const onClickNext = (data) => {
    updateForm(data);
    sessionStorage.setItem("formData", JSON.stringify(data));
    next();
    console.log(data);
  };

  return (
    <Form>
      <InputGroup>
        <InputTitle>핸드폰 번호</InputTitle>
        <TextField
          {...register("phone")}
          name="phone"
          id="phone"
          placeholder="010-0000-0000"
          size="small"
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
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.birth && <ErrorText>{errors.birth.message}</ErrorText>}

      <InputGroup>
        <Button
          type="button"
          variant="outlined"
          onClick={onClickPrev}
          sx={{ marginRight: "20px" }}
        >
          Prev
        </Button>
        <Button
          variant="outlined"
          onClick={handleSubmit(onClickNext)}
          disabled={!isValid}
        >
          Next
        </Button>
      </InputGroup>
    </Form>
  );
};
export default Step2;
