import { useState } from "react";
import { Item, Round } from "./styles/styles";


export default function Question({question}) {
  const [isChecked, setChecked] = useState(false)
  return (
    <Item>
      <Round isDone={isChecked} onClick={()=>{setChecked(!isChecked)}}/>
      {question}
    </Item>
  );
}