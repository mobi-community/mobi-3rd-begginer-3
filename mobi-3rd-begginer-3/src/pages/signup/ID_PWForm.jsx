import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const IdPwForm = ({ next, isLastStep }) => {
    const [email, setEmail] = useState(sessionStorage.getItem("emailInput"));
    const [password, setPassword] = useState(
        sessionStorage.getItem("passwordInput")
    );
    const idpwSchema = yup.object().shape({
        email: schema.fields.email,
        password: schema.fields.password,
    });

    useEffect(() => {
        const userEmail = sessionStorage.getItem("emailInput");
        const userPw = sessionStorage.getItem("passwordInput");
        setValue("email", userEmail); // input에 있는 value 값 변경
        setValue("password", userPw);
        if (userEmail && userPw) {
            setEmail(userEmail);
            setPassword(userPw);
        }
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(idpwSchema) });

    const onSubmit = (data) => {
        sessionStorage.setItem("emailInput", data.email);
        sessionStorage.setItem("passwordInput", data.password);
        next();
        alert(JSON.stringify(data));
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <Input
                    type={"text"}
                    register={register}
                    registerKey="email"
                    size="medium"
                    color="lemon"
                    errors={errors}
                    value={email}
                />
                <label htmlFor="password">Password</label>
                <Input
                    type={"password"}
                    register={register}
                    registerKey="password"
                    size="medium"
                    color="lemon"
                    errors={errors}
                    value={password}
                />
                <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
            </form>
        </>
    );
};
export default IdPwForm;
