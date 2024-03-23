import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { Button } from "@mui/material";

const IdPwForm = ({ updateForms, next, isLastStep }) => {
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
                    color="lemon"
                    errors={errors}
                />
                <label htmlFor="password">Password</label>
                <Input
                    type={"password"}
                    register={register}
                    registerKey="password"
                    size="medium"
                    color="lemon"
                    errors={errors}
                />
                <Button onClick={next}>{isLastStep ? "Submit" : "Next"}</Button>
            </form>
        </>
    );
};
export default IdPwForm;
