import style from "./MessageContainer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {convertToFormattedTime} from "../../helper/helper"
function MessageContainer(props :any) {
  return (
    <div className={style.msgWrapper}>
        <div className={style.title}>
        <FontAwesomeIcon icon={faComment} />
        <span className={style.name}>~{props?.data?.source}</span>
        <span className={style.time}>{`- ${convertToFormattedTime(props.data?.timestamp)}`}</span> 
        <span className={style.delete} onClick={() => props.onDelete(props?.data?.id)}>Delete</span>
        </div>
        <div className={style.text}>{props.data?.text}</div>
    </div>
  )
}

export default MessageContainer