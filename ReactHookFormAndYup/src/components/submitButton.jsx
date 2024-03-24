const SubmitButton = ({ children, disable = true, ...rest }) => {
  return (
    <button
      disabled={!disable}
      className=" border-[0.3rem] border-solid text-center disabled:bg-grayScale-100 border-theme-mainOppsite-thick text-tiny font-bold rounded-full p-2 w-fit h-fit hover:bg-theme-mainOppsite-light"
      {...rest}
    >
      {children}
    </button>
  )
}
export default SubmitButton
