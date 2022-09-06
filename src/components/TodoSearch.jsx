import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchInput, setSearchInput }) => {
  // const [searchInput, setSearchInput] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        placeholder="Papa"
        className="TodoSearch"
        value={searchInput}
        onChange={onSearchValueChange}
      />
    </React.Fragment>
  );
};

export { TodoSearch };
