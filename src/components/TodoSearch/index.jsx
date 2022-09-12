import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
  // const [searchInput, setSearchInput] = useState('');

  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        placeholder="Papa"
        className="TodoSearch"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </React.Fragment>
  );
};

export { TodoSearch };
