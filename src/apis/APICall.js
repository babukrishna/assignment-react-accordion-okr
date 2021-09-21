import axios from 'axios';

const APICall = axios.create({
  baseURL:"https://okrcentral.github.io"
})

export default APICall;