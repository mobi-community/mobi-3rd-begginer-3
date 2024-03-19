const Main = () => {
    const strUserData = sessionStorage.getItem("userData");

    const userData = JSON.parse(strUserData);

    return <div>Main</div>;
};
export default Main;
