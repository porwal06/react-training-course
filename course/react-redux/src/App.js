import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.authStore.authenticate);
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
