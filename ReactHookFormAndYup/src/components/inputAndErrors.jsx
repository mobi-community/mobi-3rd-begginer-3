const InputAndErrors = ({ register, resgisterKey, errors, ...rest }) => {
  const INPUT_CSS =
    "border-[0.3rem] border-solid border-theme-mainOppsite-light focus:bg-theme-mainOppsite-thick"
  const ERROR_MESSAGE_CSS =
    "w-full h-[3rem] text-system-warning-thick text-ellipsis  overflow-hidden text-sm font-bold"
  return (
    <div className="w-[70%] flex flex-col ">
      <span className="text-tiny">{resgisterKey}</span>
      <input
        className={INPUT_CSS}
        autoComplete="off"
        {...register(`${resgisterKey}`)}
        {...rest}
      />
      <span className={ERROR_MESSAGE_CSS}>
        {errors[resgisterKey] && errors[resgisterKey].message}
      </span>
    </div>
  )
}

export default InputAndErrors
