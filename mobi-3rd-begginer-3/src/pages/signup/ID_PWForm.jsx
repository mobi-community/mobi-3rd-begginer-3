const ID_PWForm = ({ email, password, updateFields }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFields({ [name]: value });
    };

    return (
        <>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};
export default ID_PWForm;
