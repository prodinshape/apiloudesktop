import {useInfiniteQuery} from 'react-query';
import API from 'api';

const fetchPosts = async ({pageParam = 1}) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${pageParam}&limit=10`,
  );
  const results = await response.json();
  return {results, nextPage: pageParam + 1, totalPages: 100};
};

const fetchplop = ({pageParam = 1}) =>
  API.get('/projects', {
    params: {
      limit: 10,
      page: pageParam,
    },
  }).then(res => {
    return {
      results: res.data,
      nextPage: pageParam + 1,
      totalPages: res.data.totalCount,
    };
  });

export default function useInfiniteProjects() {
  return useInfiniteQuery('projects', fetchplop, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
}
