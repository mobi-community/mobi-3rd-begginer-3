import Header from "./header";

const { Outlet } = require("react-router-dom");

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
