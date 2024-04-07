import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const IdPwForm = ({ updateForms, next, isLastStep }) => {
    const [email, setEmail] = useState(sessionStorage.getItem("emailInput"));
    const [password, setPassword] = useState(
        sessionStorage.getItem("passwordInput")
    );

    useEffect(() => {
        sessionStorage.setItem("emailInput", email);
    }, [email]);
    useEffect(() => {
        sessionStorage.setItem("passwordInput", password);
    }, [password]);

    useEffect(() => {
        const userEmail = sessionStorage.getItem("emailInput");
        const userPw = sessionStorage.getItem("passwordInput");
        if (userEmail && userPw) {
            setEmail(userEmail);
            setPassword(userPw);
        }
    });
    const idpwSchema = yup.object().shape({
        email: schema.fields.email,
        password: schema.fields.password,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(idpwSchema) });

    const onSubmit = (data) => {
        sessionStorage.setItem("emailInput", data.email);
        sessionStorage.setItem("passwordInput", data.password);
        next();
        alert(data);
        console.log(data);
        updateForms(data);
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
                {/* <Button onClick={next}>{isLastStep ? "Submit" : "Next"}</Button> */}
                <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
            </form>
        </>
    );
};
export default IdPwForm;
