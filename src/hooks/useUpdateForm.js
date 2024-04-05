import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useUpdateForm = (formData, schema, next) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [formData, setValue]);

  const onSubmit = () => {
    // 현재 입력 필드의 값을 가져옴
    const formData = getValues();
    // sessionStorage에서 받아온 값은 객체 형대로 data에 저장
    const data = JSON.parse(sessionStorage.getItem("formData"));
    // 기존 data와 현재 입력 필드의 값을 저장
    const updateData = { ...data, ...formData };
    // sessionStorage로 새롭게 string으로 갱신
    sessionStorage.setItem("formData", JSON.stringify(updateData));
    next(updateData);
  };

  return { register, handleSubmit, onSubmit, errors, isValid };
};

export default useUpdateForm;
