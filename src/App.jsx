import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Components/Todo/Todo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import SettingsComp from './Context/Settings/SettingsComp';
import Auth from './Components/Auth/Auth';
import Login from './Components/Login/Login';
import LoginContext from './Context/Auth/context';

export const SettingsContext = createContext();

export default function App() {
  const [list, setList] = useState([]);
  localStorage.setItem('list', JSON.stringify(list));

  return (
    <LoginContext>
      <SettingsContext.Provider value={{ list, setList, hideCompleted: false }}>
        <BrowserRouter>
          <Login />
          <Auth>
            <Header />
            <Routes>
              <Route path='/' element={<Todo />} />
              <Route path='/settings' element={<SettingsComp />} />
            </Routes>

            <List />
          </Auth>
          <Footer />
        </BrowserRouter>
      </SettingsContext.Provider>
    </LoginContext>
  );
}
