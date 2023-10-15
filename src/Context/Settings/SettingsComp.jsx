import { SettingsContext } from '../../App';
import { useContext, useEffect } from 'react';

export default function SettingsComp() {
  const { list, setList, hideCompleted } = useContext(SettingsContext);

  useEffect(() => {
    // use local storage to save the list of todos and the hideCompleted setting
    // use the useEffect hook to save the list and hideCompleted setting to local storage whenever either of these values changes

    const list = localStorage.getItem('list');
    const hideCompleted = localStorage.getItem('hideCompleted');
    if (list) {
      setList(JSON.parse(list));
    }
    if (hideCompleted) {
      setList(JSON.parse(hideCompleted));
    }
  }, [list, hideCompleted]);

  return (
    <>
      <h2> Settings Comp</h2>
      <p>{list.length}</p>
    </>
  );
}
