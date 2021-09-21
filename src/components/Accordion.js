import { useEffect, useState } from 'react';
import './Accordion.css';

const Accordion = (props) => {
  const [clicked, setClicked] = useState("0");

  useEffect(()=>{
    setClicked("0")
  },[props.selectCategory]);

  const innerList = (list) => {
    return list.map( item => <li key={item.id}>{item.title}</li>)
  }

  const onListClick = (index) => {
    setClicked(index);
  }

  const getAllTitles = function() {
    if(Object.entries(props.selectCategory).length !== 0){
      return Object.entries(props.selectCategory).map( (item, index) => 
        <li key={item[0]} onClick={()=>onListClick(index)} className={`accordion_item ${(clicked === index) ? 'active': ''}`}>
          <h3>{item[1].title}</h3>
          <ul className="innerList">{ innerList(item[1].data) }</ul>
        </li>);
    }
  }

  return(
    <ul className="list">
      {getAllTitles()}
    </ul>
  )
}

export default Accordion;