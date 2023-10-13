import { SettingsContext } from '../../App';
import { useContext, useEffect } from 'react';

export default function List() {
  const { list, setList } = useContext(SettingsContext);

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    // setList(items);
    setList([...items]);
  }

  useEffect(() => {
    setList([
      {
        id: 1,
        text: 'Clean the Kitchen',
        difficulty: 3,
        assignee: 'Person A',
        complete: false,
      },
    ]);
  }, [setList]);

  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            {/* <div onClick={() => console.log('click')}> */}
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
      <CustomIcons />
    </>
  );
}

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
