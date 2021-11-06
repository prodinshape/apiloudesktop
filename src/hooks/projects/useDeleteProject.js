import API from 'api';
import {useMutation, queryCache} from 'react-query';

export default function useDeleteProject() {
  return useMutation(
    projectId => API.delete(`/project/${projectId}`).then(res => res.data),
    {
      onSuccess: () => queryCache.refetchQueries('projects'),
    },
  );
}
