import {useQuery} from 'react-query';
import axios from 'axios';

export default function useRequest({requestId, url, method}) {
  return useQuery(
    requestId,
    () =>
      axios({
        method,
        url,
      }).then(res => res.data),
    {
      enabled: false,
    },
  );
}
