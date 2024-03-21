const PHONE_BIRTHForm = ({ phoneNumber, birthDay, updateForms }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForms({ [name]: value });
    };

    return (
        <>
            <div>
                <label htmlFor="phoneNumber">PhoneNumber</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                />
                <label htmlFor="birthDay">BirthDay</label>
                <input
                    id="birthDay"
                    name="birthDay"
                    value={birthDay}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};
export default PHONE_BIRTHForm;
