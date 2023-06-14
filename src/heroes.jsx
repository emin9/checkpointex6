import { useState } from "react"

function Heroes(){
    const [names,setNames] = useState([
        <ul>
        <li>  Шерлок Холмс </li>
        <li>  Доктор Ватсон </li>
        <li>Профессор Мориарти</li>
        <li>  Миссис Хадсон</li>
        <li>  Ирен Адлер</li>
       </ul>
    ])
    return(
        <div>
           {names}
        </div>
    )
}
export default Heroes