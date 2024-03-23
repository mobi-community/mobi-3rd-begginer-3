import Input from "../../components/commons/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../components/commons/yupValidation";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

const PhoneBirthForm = ({ next, prev, isLastStep }) => {
    const phoneNumSchema = yup.object().shape({
        phone: schema.fields.phone,
        birthday: schema.fields.birthday,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(phoneNumSchema) });

    return (
        <>
            <form>
                <label htmlFor="phone">PhoneNumber</label>
                <Input
                    type={"text"}
                    register={register}
                    registerKey="phone"
                    size="medium"
                    color="teal"
                    errors={errors}
                />
                <label htmlFor="birthday">BirthDay</label>
                <Input
                    type={"text"}
                    register={register}
                    registerKey="birthday"
                    size="medium"
                    color="teal"
                    errors={errors}
                />
                <Button onClick={prev}>Prev</Button>
                <Button onClick={next}>{isLastStep ? "Submit" : "Next"}</Button>
            </form>
        </>
    );
};
export default PhoneBirthForm;
