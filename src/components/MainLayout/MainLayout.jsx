import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Loader from '../Loader/Loader';
import MyLoader from '../Loader/DiaryLoader';
import { useSelector } from 'react-redux';

const MainLayout = () => {
  const isErrorPage = useSelector((state) => state.error.isErrorPage);

  return (
    <>
      {!isErrorPage && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
