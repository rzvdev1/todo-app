import { SettingsContext } from '../../App';
import { useContext, useEffect } from 'react';

export default function SettingsComp() {
  const { list, setList, hideCompleted } = useContext(SettingsContext);

  useEffect(() => {
    const listFromLocalStorage = localStorage.getItem('list');

    if (listFromLocalStorage) {
      setList(JSON.parse(listFromLocalStorage));
    }
  }, [setList]);

  const handleHideCompletedChange = (e) => {
    setList((prevList) => {
      return { ...prevList, hideCompleted: e.target.checked };
    });
  };

  const handleItemsPerPageChange = (e) => {
    const itemsPerPage = parseInt(e.target.value, 10);

    setList((prevList) => {
      return { ...prevList, itemsPerPage };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('list', JSON.stringify(list));

    console.log('Settings submitted:', list);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='hideCompleted'>Hide completed</label>
      <input
        id='hideCompleted'
        type='checkbox'
        checked={hideCompleted}
        onChange={handleHideCompletedChange}
      />

      <br />

      <label htmlFor='itemsPerPage'>Items Per Page:</label>
      <select
        id='itemsPerPage'
        value={list.itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  );
}
