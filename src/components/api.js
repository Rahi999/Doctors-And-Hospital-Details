import axios from "axios";

export function getDoctor(limit, page, sort) {
  return axios.get(
    `https://fakestoreapi.com/users?limit=${limit}&_page=${page}&_sort=${sort}`
  );
}

export function addDoctor(id, name, hospital, spec, salary, Details) {
  return axios({
    url: "https://fakestoreapi.com/users",
    method: "POST",
    data: {
      id,
      name,
      hospital,
      spec,
      salary
    }
  });
}
