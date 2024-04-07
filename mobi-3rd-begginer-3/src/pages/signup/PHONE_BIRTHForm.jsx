import Input from "../../components/commons/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../components/commons/yupValidation";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const PhoneBirthForm = ({ next, prev, isLastStep }) => {
    const [phone, setPhone] = useState(sessionStorage.getItem("phoneInput"));
    const [birthday, setBirthday] = useState(
        sessionStorage.getItem("birthInput")
    );

    const phoneNumSchema = yup.object().shape({
        phone: schema.fields.phone,
        birthday: schema.fields.birthday,
    });

    useEffect(() => {
        const userPhone = sessionStorage.getItem("phoneInput");
        const userBirth = sessionStorage.getItem("birthInput");
        setValue("phone", userPhone);
        setValue("birthday", userBirth);
        if (userBirth && userPhone) {
            setBirthday(userBirth);
            setPhone(userPhone);
        }
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(phoneNumSchema) });

    const onSubmit = (data) => {
        sessionStorage.setItem("phoneInput", data.phone);
        sessionStorage.setItem("birthInput", data.birthday);
        next();
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="phone">PhoneNumber</label>
                <Input
                    type={"text"}
                    register={register}
                    registerKey="phone"
                    size="medium"
                    color="teal"
                    errors={errors}
                    value={phone}
                />
                <label htmlFor="birthday">BirthDay</label>
                <Input
                    type={"text"}
                    register={register}
                    registerKey="birthday"
                    size="medium"
                    color="teal"
                    errors={errors}
                    value={birthday}
                />
                <Button onClick={prev} type="button">
                    Prev
                </Button>
                <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
            </form>
        </>
    );
};
export default PhoneBirthForm;
