import { EMP_NAME } from './ActionTypes';
import axios from 'axios';

export function empGetRequest() {
  console.log('dispatch empGetRequest');
  return axios.get('/empName')
  .then((response) => {
    // 데이터를 return 해줘야 되는뎅?
    // dispatch(empGetSuceess());
    console.log(response);
    return response.data;
  }).catch((error) => {
    console.log('employee error');
  })
}

// export function empGetSuceess() {
//   return {
//     type: EMP_GET_SUCCESS
//   }
// }
