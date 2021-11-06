import API from 'api';
import {useMutation, queryCache} from 'react-query';

export default function useSaveProject() {
  return useMutation(
    values => API.patch(`/projects/${values.id}`, values).then(res => res.data),
    {
      onMutate: values => {
        const previousProject = queryCache.getQueryData(['project', values.id]);

        queryCache.setQueryData(['project', values.id], old => ({
          ...old,
          ...values,
        }));

        return () =>
          queryCache.setQueryData(['project', values.id], previousProject);
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: async values => {
        queryCache.refetchQueries('projects');
        await queryCache.refetchQueries(['project', values.id]);
      },
    },
  );
}
