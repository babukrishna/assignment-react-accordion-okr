import APICall from './../apis/APICall';
import { FETCH_DATA } from './types';

export const fetchData = () => async dispatch => {
  const response = await APICall.get('db.json');
  dispatch({ type:FETCH_DATA, payload: parentCategories(response.data.data)})
}

export const parentCategories = (data) => {
  let childArr = childItem(data);
  let uniqueArr = [];
  let temp = data.filter( item => item.parent_objective_id === '' && item );
  
  temp.map( item => {
    if(typeof uniqueArr[item.category] === 'undefined'){
      uniqueArr[item.category] = [];  
    }
    uniqueArr[item.category][item.id] = {};
    uniqueArr[item.category][item.id]['title'] = item.title;
    return uniqueArr[item.category][item.id]['data'] = childArr[item.id];
  });

  return uniqueArr;
}

const childItem = ( data ) => {
  let uniqueArr = [];
  let temp = data.filter( item => item.parent_objective_id !== '' && item );
  
  temp.map( item => {
    if(typeof uniqueArr[item.parent_objective_id] === 'undefined'){
      uniqueArr[item.parent_objective_id] = [];  
    }

    return uniqueArr[item.parent_objective_id].push(item)
  });

  return uniqueArr;
}