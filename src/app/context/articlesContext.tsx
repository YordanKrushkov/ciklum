import React, { createContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import IArticle from '../types/article';

interface AppContextInterface {
  articles: IArticle[] 
  removeArticle: Function
  editArticle: Function
};

interface Props {
  children: JSX.Element
};

export const ArticleContext = createContext({} as AppContextInterface);

const ArticleProviderFunc: React.FC<Props> = ({ children }: Props) => {

  const fetchedArticles = useFetch();
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(()=> {
    if(fetchedArticles) {
      setArticles(fetchedArticles)
    };
  }, [fetchedArticles]);

  const removeArticle = (item: IArticle) => {
    let arr = articles.filter(x=>x !== item);
    setArticles(arr);
  };

  const editArticle = (item: IArticle) => {
    const element = articles.find(x => x.url === item.url);
    if(element) {
      const arr = [...articles];
      arr[arr.indexOf(element)] = item;
      setArticles(arr);
    };
  };

  const props: AppContextInterface = {
    articles,
    removeArticle,
    editArticle
  };

  return (
    <ArticleContext.Provider value={{ ...props } as any}>
      {children}
    </ArticleContext.Provider>
  );
};

const ArticleProvider = React.memo(ArticleProviderFunc);
export default  ArticleProvider;