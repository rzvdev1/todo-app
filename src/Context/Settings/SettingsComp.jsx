import { SettingsContext } from '../../App';
import { useContext, useEffect } from 'react';

export default function SettingsComp() {
  const { list, setList, hideCompleted } = useContext(SettingsContext);

  useEffect(() => {
    setList([
      {
        id: 1,
        text: 'Clean the Kitchen',
        difficulty: 3,
        assignee: 'Person A',
        complete: hideCompleted,
      },
    ]);
  }, [setList]);

  return (
    <>
      <h2> Settings Comp</h2>
      <p>{list.length}</p>
    </>
  );
}
