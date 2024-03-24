import { useNavigate } from "react-router-dom"
import { Button } from "."

const RegisterBase = ({
  handleSubmit,
  onSubmit,
  isValid,
  title,
  RegisterForm,
}) => {
  const navi = useNavigate()

  return (
    <>
      <div className="w-1 h-[5rem]" />
      <div className="w-[40rem] h-[35rem] border-[10px] border-solid border-theme-mainOppsite-light rounded-3xl">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-[4rem] text-center w-fit h-fit">{title}</div>
          {RegisterForm}
          <div className="flex w-[80%] h-fit p-2 justify-between items-center">
            <Button
              type="button"
              onClick={() => {
                return navi(-1)
              }}
            >
              prev
            </Button>
            <Button type="submit" disable={isValid}>
              next
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterBase
