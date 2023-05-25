import { ButtonHTMLAttributes } from "react"
import "./style.scss"

interface ButtonPops extends ButtonHTMLAttributes<HTMLButtonElement>{
  buttonName: string;
  corners?: "round" | "square";
}
const Button = ({buttonName, type="button", corners="square", ...rest}:ButtonPops) => {
  return (
    <button className={corners} type={type} {...rest}>
      {buttonName}
    </button>
  )
}

export default Button