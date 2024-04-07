import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const FREETXTForm = ({ next, prev, isLastStep }) => {
    const [freetext, setFreetext] = useState(
        sessionStorage.getItem("textInput")
    );

    const freetextSchema = yup.object().shape({
        freetext: schema.fields.freetext,
    });

    useEffect(() => {
        const userText = sessionStorage.getItem("textInput");
        setValue("freetext", userText);
        if (userText) {
            setFreetext(userText);
        }
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(freetextSchema) });

    const onSubmit = (data) => {
        sessionStorage.setItem("textInput", data.freetext);
        next();
        alert(JSON.stringify(data));
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="freetext">FreeText</label>
                    <Input
                        type={"text"}
                        register={register}
                        registerKey="freetext"
                        size="large"
                        color="green"
                        errors={errors}
                        value={freetext}
                    />
                    <Button onClick={prev} type="button">
                        Prev
                    </Button>
                    <Button type="submit">
                        {isLastStep ? "Submit" : "Next"}
                    </Button>
                </form>
            </div>
        </>
    );
};
export default FREETXTForm;
