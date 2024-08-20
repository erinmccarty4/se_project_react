const baseUrl = "http://localhost:3001";

const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

  function request(url, options) {
    return request(url, options).then(processResponse)
  }

function getItems() {
  return fetch(`${baseUrl}/items`,{
    headers: { "Content-Type": "application/json" }
  });
}

function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export { getItems, addItem, deleteItem };
