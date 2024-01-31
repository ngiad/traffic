import { ErrorNotfound } from "@/core/requestError"
import style from "../../../assets/styles/menber.module.css"

const menber = () => {
  throw new ErrorNotfound("looix notfound" + 123344)
  return (
    <div className={style["main-test"]}>menber</div>
  )
}


export default menber
