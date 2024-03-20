import { Button, TextField } from "@mui/material";
import {
  InputGroup,
  InputTitle,
  ErrorText,
} from "../libs/styled-components/displayStyle";
import { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Step3 = ({ updateForm }) => {
  const schema = yup.object().shape({
    message: yup
      .string()
      .min(100, "하고싶은 말은 100자 이상 입력해주세요.")
      .max(300, "하고싶은 말은 300자 이내로 입력해주세요.")
      .required("하고싶은 말을 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateForm(data);
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
    <>
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
      <Button onClick={handleSubmit(onSubmit)}>Next</Button>
    </>
  );
};
export default Step3;

const Length = styled.span`
  color: blue;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;
