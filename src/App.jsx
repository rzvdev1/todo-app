import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Components/Todo/Todo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import SettingsComp from './Context/Settings/SettingsComp';

export const SettingsContext = createContext();

export default function App() {
  const [list, setList] = useState([]);

  return (
    <SettingsContext.Provider value={{ list, setList, hideCompleted: false }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/settings' element={<SettingsComp />} />
        </Routes>

        <List />
        <Footer />
      </BrowserRouter>
    </SettingsContext.Provider>
  );
}
