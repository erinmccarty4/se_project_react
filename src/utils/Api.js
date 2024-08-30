const baseUrl = "http://localhost:3001";

const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return request(url, options).then(processResponse);
}
// function request(url, options) {
//   return fetch(url, options).then(processResponse);
// }

function getItems() {
  return request(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then(processResponse);
}

function addItem(item) {
  return request(`${baseUrl}/items`, {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(item),
  }).then(processResponse);
}

function deleteItem(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",

    headers: { "Content-Type": "application/json" },
  }).then(processResponse);
}

export { getItems, addItem, deleteItem };
