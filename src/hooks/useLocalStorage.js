import { useEffect, useState } from 'react';

//itemname what we want to store (todos, other text,etc)
const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, initialValue);
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }); //Adding , [itemName, initialValue] solves my warning

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
};

export default useLocalStorage;
