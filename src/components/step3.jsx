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

const Step3 = ({ setFormData, formData, updateForm, next, prev }) => {
  const { register, handleSubmit, onSubmit, errors, isValid } = useUpdateForm(
    updateForm,
    step3Schema,
    next,
    prev
  );

  const onClickSignUp = (form) => {
    setFormData((prev) => ({ ...prev, ...form }));
    sessionStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, ...form })
    );
    const sessionData = JSON.parse(sessionStorage.getItem("formData"));
    alert(JSON.stringify(sessionData));
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
          onClick={prev}
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
