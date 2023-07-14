import { store } from '../store/index'
import axios from 'axios';

axios.defaults.baseURL = <string>(import.meta.env.VITE_SERVICE_URL);

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
