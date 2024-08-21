const baseUrl = "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(processResponse);
}

function getItems() {
  return request(`${baseUrl}/items`, {
<<<<<<< HEAD
    headers: { "Content-Type": "application/json" },
=======
    headers: { "Content-Type": "application/json" }
>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
  });
}

function addItem(item) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
<<<<<<< HEAD
    body: JSON.stringify(item),
=======
    body: JSON.stringify(item)
>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
  });
}

function deleteItem(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
<<<<<<< HEAD
    headers: { "Content-Type": "application/json" },
  });
}

const api = {
  getItems,
  addItem,
  deleteItem,
};

export default api;

// export { getItems, addItem, deleteItem };
=======
    headers: { "Content-Type": "application/json" }
  });
}

export { getItems, addItem, deleteItem };
>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
