import {apiFetch, BASE_URL} from "./api_fetch";


export const listContacts = () =>
  apiFetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    }
  });