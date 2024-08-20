const baseUrl = "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(processResponse);
}

function getItems() {
  return request(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" }
  });
}

function addItem(item) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });
}

function deleteItem(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
}

export { getItems, addItem, deleteItem };
