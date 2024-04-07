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
import { step3Schema } from "../libs/yup/schema/step3";
import useUpdateForm from "../hooks/useUpdateForm";

const Step3 = ({ formData, setFormData, next, prev, step }) => {
  const { register, handleSubmit, onSubmit, errors, isValid } = useUpdateForm(
    formData,
    step3Schema,
    step > 3 ? null : next,
    prev
  );

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
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          value={formData.message}
          onChange={(e) => {
            handleInputChange(e);
            if (e.target.value.length > maxLength) {
              e.target.value = e.target.value.slice(0, maxLength);
            }
            setFormData({ ...formData, message: e.target.value });
          }}
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.message && <ErrorText>{errors.message.message}</ErrorText>}

      <ButtonGroup>
        <Button
          type="button"
          variant="outlined"
          onClick={prev}
          sx={{ marginRight: "20px" }}
        >
          Prev
        </Button>
        <Button type="submit" variant="outlined" disabled={!isValid}>
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
