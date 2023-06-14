import { useState } from "react"

function Heroes(){
    const [names,setNames] = useState([
        
          'Шерлок Холмс' ,
          'Доктор Ватсон' ,
        'Профессор Мориарти',
         'Миссис Хадсон',
          'Ирен Адлер',
       
    ])
    return(
        <div>
            {
                names.map((name, index) =>
                <li key = {index}>{name}</li>
            )
            }
        </div>
        )
}
export default Heroes