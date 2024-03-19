import { Button, TextField } from "@mui/material";
import Input from "../components/commons/input";
import { Controller, useForm } from "react-hook-form";

const SignUpPage = () => {
    const InputField = ({ field, ...props }, ref) => {
        return <TextField {...field} inputRef={ref} />;
    };

    const { control, handleSubmit } = useForm({});

    return (
        <>
            <div>signup</div>
            <Input
                type="text"
                color="lemon"
                placeholder="ID를 입력하세요"
                size="large"
            ></Input>
            <form>
                <Controller
                    name="ID"
                    control={control}
                    // defaultValue="ID를 입력해주세요"
                    placeholder="ID를 입력해주세요"
                    render={({ field }) => (
                        <InputField
                            {...field}
                            placeholder="ID를 입력해주세요"
                        />
                    )}
                />
                <Button type="submit">제출</Button>
            </form>
        </>
    );
};
export default SignUpPage;
