
// Define uma função para definir um item no localStorage
export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Define uma função para obter um item do localStorage
  export const getLocalStorageItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  // Define uma função para remover um item do localStorage
  export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
  };