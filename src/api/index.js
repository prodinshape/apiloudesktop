import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// optionaly add base url
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const client = axios;

export default client;

// export default axios.create({
//   baseURL: 'https://beprojectback.herokuapp.com/api/',
// });
