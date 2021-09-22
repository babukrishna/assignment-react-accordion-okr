import './SelectBox.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';

const SelectBox = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { fetchData, categories } = props;
  
  useEffect( () => {
    fetchData();
  },[fetchData]);

  const getOptionList = () => {
    let listArr = [];
    listArr = ['Please Select', ...Object.keys(categories)];
    return listArr.map( item => <option key={item} value={item}> { item } </option>);
  }

  const onSelection = (e) => {
    setSelectedCategory(e.currentTarget.value);
  }

  //Handled data loading
  if( !categories ) {
    return(
      <h2>Loading...</h2>
    )
  }

  //actual dom return
  return(
    <div className="selectBoxHolder">
      <div>
        <select className="selectBox" onChange={onSelection}>
          { 
            getOptionList()
          }
        </select>
      </div>
      
      <Accordion selectCategory={selectedCategory} allCategories={categories}/>
    </div>
  )
}

const mapStateToPros = (state) => {
  return{
    categories:state.fetctData,
  }
}

export default connect(mapStateToPros, {fetchData})(SelectBox);