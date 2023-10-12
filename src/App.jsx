import Todo from './Components/Todo/Todo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import { createContext, useState } from 'react';

export const SettingsContext = createContext();

export default function App() {
  const [list, setList] = useState([]);
  return (
    <SettingsContext.Provider value={{ list, setList }}>
      <Header />
      <Todo />
      <List />
      <Footer />
    </SettingsContext.Provider>
  );
}
