import { useEffect, useState } from 'react';
import Overlay from './overlay';
import './Accordion.css';

const Accordion = (props) => {
  const [clicked, setClicked] = useState("");
  const [overlayData, setOverlayData] = useState({});
  const { selectCategory, allCategories } = props;

  useEffect(()=>{
    setClicked('');
  },[selectCategory]);

  const onListClick = (index) => {
    setClicked(index);
  }

  const onSubListClick = (item) => {
    setOverlayData(item);
  }

  const innerList = (list) => {
    return list.map( item => <li key={item.id} onClick={()=>onSubListClick(item)}>{item.title}</li>)
  }

  const getList = (selectedKey) => {
    if(Object.entries(allCategories[selectedKey]).length !== 0){
      return Object.entries(allCategories[selectedKey]).map( item => {
        return(
          <li key={item[0]} onClick={()=>onListClick(item[0])} className={`${(clicked === item[0]) ? 'active': ''}`}>
            <h3>{item[1].title} </h3>
            { (item[1].data) && <ul className="innerList">{ innerList(item[1].data) }</ul> }          
          </li>
        )
      });
    }
  }

  const getAllTitles = function() {
    if(selectCategory === '' || selectCategory === 'Please Select'){
      return Object.keys(allCategories).map( item => getList(item))
    }else{
      return getList(selectCategory);
    }
  }

  if(Object.keys(allCategories).length === 0){
    return <div>Loading....</div>
  }

  return(
    <div>
      <ul className="list">
        { getAllTitles() }
      </ul>
      <Overlay data={overlayData}/>
    </div>
  )
}

export default Accordion;