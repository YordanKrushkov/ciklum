import React from 'react';
import Articles from './pages/Articles';
import ArticleProvider from './app/context/articlesContext';

const App: React.FC = () => {

  return (
    <div>
      <ArticleProvider>
        <Articles />
      </ArticleProvider>
    </div>
  );
}

export default App;
