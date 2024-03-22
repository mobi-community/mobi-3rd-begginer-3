import { Button, TextField } from "@mui/material";
import {
  InputGroup,
  InputTitle,
  ErrorText,
  Form,
  ButtonGroup,
} from "../libs/styled-components/displayStyle";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { step3Schema } from "../libs/yup/schema/step3";

const Step3 = ({ updateForm, next, prev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(step3Schema),
  });

  const onClickPrev = (data) => {
    prev();
    console.log(data);
  };

  const onClickSignUp = (data) => {
    updateForm(data);
    sessionStorage.setItem("formData", JSON.stringify(data));
    alert(data.message);
    console.log(data);
  };

  const [currentLength, setCurrentLength] = useState(0);
  const maxLength = 300;

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setCurrentLength(text.length);
    } else {
      setCurrentLength(maxLength);
      e.target.value = text.slice(0, maxLength);
    }
  };

  return (
    <Form>
      <InputGroup>
        <InputTitle>
          하고싶은 말
          <Length>
            ({currentLength}/{maxLength})
          </Length>
        </InputTitle>
        <TextField
          {...register("message")}
          name="message"
          id="message"
          placeholder="하고싶은 말"
          multiline
          rows={15}
          onChange={(e) => {
            handleInputChange(e);
            if (e.target.value.length > maxLength) {
              e.target.value = e.target.value.slice(0, maxLength);
            }
          }}
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
      <ButtonGroup>
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
          onClick={handleSubmit(onClickSignUp)}
          disabled={!isValid}
        >
          회원가입
        </Button>
      </ButtonGroup>
    </Form>
  );
};
export default Step3;

const Length = styled.span`
  color: blue;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;
