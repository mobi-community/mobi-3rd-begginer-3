import { RegisterBase, TextareaAndErrors } from "../components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemeComment } from "../schemes"
import { REGISTER_KEY } from "../const/key"
import { manageUserData } from "../utils"
const Comment = () => {
  const history = JSON.parse(sessionStorage.getItem("data")) ?? ""
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schemeComment) })

  const onSubmit = (data) => {
    manageUserData(history, data)
    alert(sessionStorage.getItem("data"))
  }

  return (
    <RegisterBase
      isValid={isValid}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      title="Comment"
      prevPageUrl={"/birth&moblie"}
      RegisterForm={
        <TextareaAndErrors
          defaultValue={history.comment}
          placeholder="100~300자 사이로 입력해주세요"
          register={register}
          resgisterKey={REGISTER_KEY.comment}
          errors={errors}
        />
      }
    />
  )
}
export default Comment
