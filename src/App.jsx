import { useState } from 'react';

import MainHeader from './components/MainHeader';
import PostList from './components/PostList';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList onStopPosting={hideModalHandler} isPosting={modalIsVisible} />
      </main>
    </>
  );
};

export default App;
