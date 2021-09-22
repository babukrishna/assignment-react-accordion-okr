import axios from 'axios';

const APICall = axios.create({
  baseURL:"https://raw.githubusercontent.com/babukrishna/assignment-react-accordion-okr/main"
})

export default APICall;