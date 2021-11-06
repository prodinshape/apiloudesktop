import {useQuery} from 'react-query';
import API from 'api';

export default function useGetProjects() {
  return useQuery('projects', () => API.get('projects').then(res => res.data));
}
