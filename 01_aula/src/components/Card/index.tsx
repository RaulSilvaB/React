import { useEffect, useState } from "react";
import "./styles.css"

interface CardsProps{
    imageUrl : string;
    name : string
}

export function Card(props: CardsProps){

    const [Follow, setFollow] = useState(false)

    function handleFollowAndUnFollow(){
        setFollow((setPrevious) => !setPrevious)
    }

    useEffect(() => {
        if(Follow){
            console.log('curtiu')
        }
    })


    return(
        
  <div className="container">

        <div className="card">
          <div>
            <img src={props.imageUrl} alt="" />
            <strong>{props.name}</strong>
          </div>
            <button onClick={handleFollowAndUnFollow}
            className={Follow ? "seguindo" : "btn"}>
                {Follow ? "Descurtir" : "Curtir"}
            </button>
        </div>
      

  </div>

    )
}
