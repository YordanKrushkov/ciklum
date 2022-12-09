import React, { useEffect, useContext, useState, useCallback, ChangeEvent, FormEvent, lazy, Suspense } from 'react';
import { Wrapper, Buttons, PageTitle } from './index.styled';
import Article from '../../components/Article';
import Button from '../../components/Button';
import { Loader } from '../../components/Loader';
import IArticle from '../../app/types/article';
import { ArticleContext } from '../../app/context/articlesContext';
const Modal = lazy(() => import('../../components/PopUp'));

const Articles: React.FC = () => {
  const { articles, removeArticle, editArticle } = useContext(ArticleContext);
  const [pagination, setPagination] = useState({ start: 0, end: 10 });
  const [current, setCurrent] = useState<IArticle[]>([]);
  const [isEdit, setIsEdit] = useState<IArticle>({ title: '', url: '', imageUrl: '' });

  useEffect(() => {
    setCurrent(articles.slice(pagination.start, pagination.end))
  }, [articles, pagination]);

  const NextPage = () => {
    if (pagination.end + 10 < articles.length) {
      setPagination({
        start: pagination.start + 10,
        end: pagination.end + 10,
      });
    } else {
      setPagination({
        start: pagination.start + 10,
        end: pagination.end + (articles.length - pagination.end),
      });
    };
  };

  const PreviusPage = () => {
    if (pagination.end - pagination.start < 10) {
      setPagination({
        start: pagination.start - 10,
        end: (Math.ceil(pagination.end / 10) * 10) - 10,
      });
    } else if (pagination.start - 10 >= 0) {
      setPagination({
        start: pagination.start - 10,
        end: pagination.end - 10,
      });
    };
  };

  const closeModal = () => setIsEdit({ title: '', url: '', imageUrl: '' });

  const deleteArticle = useCallback((item: IArticle) => removeArticle(item), [removeArticle])
  const changeHandler = useCallback((e: ChangeEvent) => setIsEdit({ ...isEdit, title: (e.target as HTMLInputElement).value }), [isEdit])

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    editArticle(isEdit);
    closeModal();
  };

  return (
    <>
      <PageTitle>Articles</PageTitle>
      <Wrapper>
        {current?.map(x => <Article article={x} key={x.title} deletItem={deleteArticle} editItem={setIsEdit} />)}
      </Wrapper>
      <Buttons>
        <Button disabled={pagination.start <= 0} onClick={PreviusPage}>Previus</Button>
        <Button disabled={pagination.end >= articles.length} onClick={NextPage}>Next</Button>
      </Buttons>
      {isEdit.title &&
        <Suspense fallback={<Loader />}><Modal value={isEdit.title} onSubmit={submitHandler} onChange={changeHandler} onCloseClick={closeModal} /></Suspense>
      }
    </>
  );
};

export default Articles;
