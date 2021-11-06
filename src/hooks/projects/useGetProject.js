import {useQuery} from 'react-query';
import API from 'api';

export const fetchProject = slug => {
  console.log('plop');
  console.log(slug);
  return API.get(`projects/${slug}`).then(res => res.data);
};

export default function useProject(slug) {
  console.log('use project');
  console.log(slug);
  return useQuery(['projects', slug], () =>
    API.get(`projects/${slug}`).then(res => res.data),
  );
}
