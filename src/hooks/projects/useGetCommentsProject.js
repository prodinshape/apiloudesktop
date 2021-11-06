import {useQuery} from 'react-query';
import API from 'api';

export const fetchProject = slug => {
  console.log('plop');
  console.log(slug);
  return API.get(`projects/${slug}`).then(res => res.data);
};

export default function useProject(slug) {
  return useQuery(['comments', slug], () =>
    API.get(`projects/${slug}/comments`).then(res => res.data),
  );
}
