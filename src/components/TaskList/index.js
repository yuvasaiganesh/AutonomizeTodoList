import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./index.css"
const TaskList=(props)=>{
    const {data,editeddata,delData}=props
    
    const toEdit=()=>{
          editeddata(data)
    }

    const todel=()=>{
        delData(data)
  }

    return (
        <div className="listData">
        <li >{data.task}  (updated {data.count} times)</li>
        <div className="icons">
        <MdOutlineModeEdit onClick={toEdit}/>
        <RiDeleteBin6Line onClick={todel}/>
        </div>

        </div>
    )

}
export default TaskList