import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { useEffect, useState } from "react";

const FREETXTForm = ({ freetext, updateForms, disabled }) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const freetextSchema = yup.object().shape({
        freetext: schema.fields.freetext,
    });

    const {
        register,
        handleSubmit,
        isValid,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(freetextSchema) });

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForms({ [name]: value });
        console.log(updateForms, "updateForms");
    };

    const onSubmit = (data) => {
        updateForms(data);
    };

    // const emailValue = watch("email");
    // const passwordValue = watch("password");
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="freetext">FreeText</label>
                    <Input
                        register={register}
                        registerKey="freetext"
                        size="large"
                        name="freetext"
                        value={freetext}
                        color="lemon"
                        onChange={handleChange}
                        errors={errors}
                        validate={isValid}
                    />
                    {/* <input
                        id="freetext"
                        name="freetext"
                        value={freetext}
                        onChange={handleChange}
                    /> */}
                    {errors.freetext && <p>{errors.freetext?.message}</p>}
                </form>
            </div>
        </>
    );
};
export default FREETXTForm;
