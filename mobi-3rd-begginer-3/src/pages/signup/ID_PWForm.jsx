import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { useEffect, useState } from "react";

const ID_PWForm = ({ email, password, updateForms }) => {
    const idpwSchema = yup.object().shape({
        email: schema.fields.email,
    });

    const {
        register,
        handleSubmit,
        isValid,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(idpwSchema) });

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForms({ [name]: value });
        console.log(updateForms, "updateForms");
    };

    const onSubmit = (data) => {
        updateForms(data);
    };

    return (
        <>
            <form>
                <label htmlFor="email">Email</label>
                <Input
                    type={"text"}
                    register={register}
                    registerKey="email"
                    size="medium"
                    name="email"
                    value={email}
                    color="lemon"
                    errors={errors}
                    // validate={isValid}
                />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </form>
        </>
    );
};
export default ID_PWForm;
