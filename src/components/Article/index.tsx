import React, { useCallback } from 'react';
import IArticle from '../../app/types/article';
import Button from '../Button';
import { Card, Image, Title, Buttons } from './index.styled';

interface Props {
  article: IArticle
  deletItem: Function
  editItem: Function
};

const Article: React.FC<Props> = ({ article, deletItem, editItem }) => {

  const clickHandler = useCallback(() => {
    window.open(article.url, '_blank');
  }, [article]);

  return (
    <Card>
      <Image>
        <img src={article.imageUrl} alt={`article: ${article.title}`} />
      </Image>
      <Title onClick={clickHandler}>{article.title}</Title>
      <Buttons>
        <Button danger onClick={() => deletItem(article)}>Delete</Button>
        <Button onClick={() => { editItem(article) }}>Edit</Button>
      </Buttons>
    </Card>
  );
};

export default Article;
