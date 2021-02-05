
import { apiFetch, BASE_URL } from "./api_fetch.js";

export const createNewContactAPI = ( name, number, email, relation) =>
  apiFetch(`${BASE_URL}/contacts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, number, email, relation }),
  });


export const editContactAPI = (contactID, name, number, email, relation) =>
  apiFetch(`${BASE_URL}/contacts/${contactID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, number, email, relation }),
  });



export const deleteContactAPI = (contactID) =>
  apiFetch(
    `${BASE_URL}/categories/${contactID}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Token token=${sessionStorage.getItem("token")}`,
      },
    }
  );