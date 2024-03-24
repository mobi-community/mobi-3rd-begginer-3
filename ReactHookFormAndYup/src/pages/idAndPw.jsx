import { schemeEmailAndPw } from "../schemes"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterBase, InputAndErrors } from "../components"
import { useNavigate } from "react-router-dom"
import { REGISTER_KEY } from "../const/key"
import { manageUserData } from "../utils"

const IdAndPw = () => {
  const navi = useNavigate()
  const history = JSON.parse(sessionStorage.getItem("data")) ?? ""
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schemeEmailAndPw) })

  const onSubmit = (data) => {
    manageUserData(history, data)
    navi("/birth&moblie")
  }

  return (
    <RegisterBase
      isValid={isValid}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      title="ID&Email"
      RegisterForm={
        <>
          <InputAndErrors
            defaultValue={history.email}
            placeholder="email을 입력해주세요"
            register={register}
            resgisterKey={REGISTER_KEY.email}
            errors={errors}
          />
          <InputAndErrors
            defaultValue={history.password}
            placeholder="password를 입력해주세요"
            register={register}
            resgisterKey={REGISTER_KEY.password}
            errors={errors}
          />
        </>
      }
    />
  )
}
export default IdAndPw
