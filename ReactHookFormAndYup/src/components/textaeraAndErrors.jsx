const TextareaAndErrors = ({ register, resgisterKey, errors, ...rest }) => {
  const TEXT_CSS =
    "h-[20rem] resize-none border-[0.3rem] border-solid border-theme-mainOppsite-light focus:bg-theme-mainOppsite-thick"
  const SPAN_CSS =
    "w-full h-[1rem] text-system-warning-thick text-ellipsis  overflow-hidden text-sm font-bold"
  return (
    <div className="w-[80%] h-[22rem] flex flex-col ">
      <span className="text-tiny">{resgisterKey}</span>
      <textarea
        className={TEXT_CSS}
        autoComplete="off"
        {...register(`${resgisterKey}`)}
        {...rest}
      />
      <span className={SPAN_CSS}>
        {errors[resgisterKey] && errors[resgisterKey].message}
      </span>
    </div>
  )
}
export default TextareaAndErrors
