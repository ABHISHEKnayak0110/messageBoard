import style from "./Button.module.scss"
interface buttonProps{
    name : string
    onChange : CallableFunction
    extraStyle ?: string
    disable ?: boolean
}
function Button(props: buttonProps) {
    console.log("hh" , props.disable )
  return (
   <button
   className={`${style.button} ${props.extraStyle} ${props.disable ? style.disableBtn : ""}`}
    onClick={() => props.onChange()}
    disabled ={props.disable}
    >
     {props.name}
   </button>
  )
}

export default Button