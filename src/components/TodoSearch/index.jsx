import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
  // const [searchInput, setSearchInput] = useState('');

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
