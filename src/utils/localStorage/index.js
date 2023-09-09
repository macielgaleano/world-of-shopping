export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if(data) return JSON.parse(data)
};

export const setLocalStorage = (key, data) => {
  const formattedData = JSON.stringify(data);
  localStorage.setItem(key, formattedData);
};
