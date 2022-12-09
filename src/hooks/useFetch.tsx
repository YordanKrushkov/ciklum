import { useState, useEffect } from 'react';
import IArticle from '../app/types/article';
const url = 'https://storage.googleapis.com/aller-structure-task/article_list.json';

const useFetch = (): IArticle[] | [] => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result) => setArticles(result))
      .catch(err => console.log(err))
  }, [])

  return articles;
}

export default useFetch;