async function getItem(name) {
  return await localStorage.getItem(name);
}

async function setItem(name, param) {
  return await localStorage.setItem(name, JSON.stringify(param));
}

async function removeItem(name) {
  return await localStorage.removeItem(name);
}

async function removeAll() {
  return await localStorage.clear();
}

export { removeAll, removeItem, setItem, getItem };
