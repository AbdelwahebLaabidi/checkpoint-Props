import Player from "./Player"
import Players from "../Players"

const PlayersList=()=>{
    return(
       <div className='cardA'>
        {
             Players.map((el,i,t)=><Player el={el}/>)
        }
       </div>
    )
}

export default PlayersList