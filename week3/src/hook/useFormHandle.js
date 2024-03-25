import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UseFormHandle = (initData, schema, onNext) => {
    // useForm사용
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) }); // 유효성 검사를 하기 위해 yup사용

    //
    useEffect(() => {
        // 객체의 각 키와값을 반복
        // Object.entries는 객체의 각 속성을 키,값의 형태의 배열로 변환하여 반복할 수 있게함.
        Object.entries(initData).forEach(([key, value]) => {
            // 키,값 업데이트
            setValue(key, value);
        });
        //initData, setValue가 변경될 때마다 마운트
    }, [initData, setValue]);

    const onSubmit = () => {
        // 현재 입력 필드의 값을 가져옴
        const formData = getValues();
        // sessionStorage에서 받아온 값은 객체 형대로 data에 저장
        const data = JSON.parse(sessionStorage.getItem("formData"));
        // 기존 data와 현재 입력 필드의 값을 저장
        const updateData = { ...data, ...formData };
        // sessionStorage로 새롭게 string으로 갱신
        sessionStorage.setItem("formData", JSON.stringify(updateData));
        onNext(updateData);
    };

    return { register, handleSubmit, onSubmit, errors, isValid };
};
export default UseFormHandle;
