import API from 'api';
import {useMutation, useQueryClient} from 'react-query';

export default function useLikeProject(slug) {
  const cache = useQueryClient();

  return useMutation(
    values =>
      API.post(`/projects/${slug}/favorite`, values).then(res => res.data),
    {
      onSuccess: data => cache.refetchQueries(),
    },
  );
}
