import Player from "./Player"
import Players from "../Players"

const PlayersList=()=>{
    return(
       <div className='cardA'>
        {
             Players.map((el,i,t)=><Player key={i} el={el}/>)
        }
       </div>
    )
}

export default PlayersList