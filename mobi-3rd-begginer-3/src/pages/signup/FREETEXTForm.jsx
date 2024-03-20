import { useForm } from "react-hook-form";

const FREETXTForm = ({ freeText, updateFields }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFields({ [name]: value });
    };

    return (
        <>
            <div>
                <label htmlFor="freeText">FreeText</label>
                <input
                    id="freeText"
                    name="freeText"
                    value={freeText}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};
export default FREETXTForm;
