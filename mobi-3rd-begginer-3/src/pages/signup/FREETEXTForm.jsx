import { useForm } from "react-hook-form";
import schema from "../../components/commons/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/commons/input";
import * as yup from "yup";
import { Button } from "@mui/material";

const FREETXTForm = ({ updateForms, next, prev, isLastStep }) => {
    const freetextSchema = yup.object().shape({
        freetext: schema.fields.freetext,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(freetextSchema) });

    const onSubmit = (data) => {
        updateForms(data);
    };

    return (
        <>
            <div>
                <form>
                    <label htmlFor="freetext">FreeText</label>
                    <Input
                        type={"text"}
                        register={register}
                        registerKey="freetext"
                        size="large"
                        color="green"
                        errors={errors}
                    />
                    <Button onClick={prev}>Prev</Button>
                    <Button onClick={next}>
                        {isLastStep ? "Submit" : "Next"}
                    </Button>
                </form>
            </div>
        </>
    );
};
export default FREETXTForm;
