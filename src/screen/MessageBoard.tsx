import { useEffect, useState } from "react"
import Button from "../components/button/Button"
import MessageContainer from "../components/messageContainer/MessageContainer"
import style from "./MessageBoard.module.scss"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function MessageBoard() {
    const [inputeText , setInputText] = useState("")
    const [allMessage , setAllMessage] = useState([])
    const[sortIncrease , setSortIncrease] = useState(true)


 const url = "https://mapi.harmoney.dev/api/v1/messages/"
 const headers ={
    Authorization  :"BYdJcWeztPiLZvXW"
}
    /**Api Call **/
  const getMessageApiCall = async () => {
    
    const data = await axios.get(url ,{ headers: headers })
    setAllMessage(data?.data)
  }

/**hitting Api for first Time  **/
useEffect(
    () => {
      getMessageApiCall()
    },[]
)

/** Post Api Call */

const handlePostApiCall = async() => {
    console.log("hello")
    if(inputeText?.length){
    const body ={
        text : inputeText
    }
    console.log("hello")
    try{
        console.log("hello")
        const data = await axios.post(url ,body, { headers: headers} )
        setInputText("")
        toast.success("Message Posted Successfully")
        getMessageApiCall()
    }catch(err :any){
      console.log(err)
      toast.error(err)
    }
    }
}

/**Delete Api Call */
const handleDeleteApiCall = async(id :string) => {
    try{
        console.log("hello")
        const data = await axios.delete(`${url}${id}/` , { headers: headers} )
        toast.success("Message Deleted Successfully")
        getMessageApiCall()
    }catch(err :any){
      console.log(err)
      toast.error(err)
    }
}

 /**Onchange Input */
    const handleChangeInput =(e:any) => {
      const data = e?.target?.value?.trim()
       setInputText(data)
    }
  
 
    const OnClickDeleteAll =() => {
        toast.error("Api needed")
    }

  const handleSortByTimestamp = () =>  {
         console.log("click")
        const sortedData = allMessage.sort((a:any, b :any) => {
          const timestampA = new Date(a.timestamp).getTime();
          const timestampB = new Date(b.timestamp).getTime();
      
          return sortIncrease ?  timestampB - timestampA : timestampA - timestampB ;
        });
        console.log("click" , sortedData)
        setSortIncrease(prev => !prev)
        setAllMessage([...sortedData])
      }
      
   console.log("all" , allMessage , sortIncrease)
  return (
   <div className={style.messageBoardWrapper}>
    <h1>Chatter</h1>
    <div className={style.containerPostitem}>
     <p>Type something in box below, then hit "Post" </p>
     <div className={style.inputeButtonDiv}>
        <input type="text" value={inputeText} onChange={handleChangeInput} />
        <Button
         name ={"Post!"} 
         disable ={inputeText?.length ===0 }
         onChange={handlePostApiCall}
         />
        <Button 
        name ={"Delete All"} 
        extraStyle={style.deleteBtn} 
        onChange={OnClickDeleteAll}
        />
        {
            allMessage?.length >1 && <Button 
            name ={"Sort by the timestamp"} 
            onChange={handleSortByTimestamp}
            extraStyle={sortIncrease ? "" : style.sortButton}
            />
        }
     </div>
    </div>
     <div className={style.messageContainer}>
     {
      allMessage?.map(msg => {
      return(
        <MessageContainer
         data ={msg}
        onDelete ={handleDeleteApiCall}
         />
      )
      })
     }
    
     </div>
   </div>
  )
}

export default MessageBoard