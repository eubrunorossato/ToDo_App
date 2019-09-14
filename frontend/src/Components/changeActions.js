import axios from "axios";

const URL = "http://localhost:3003/api/todos"

export const changeDescription = (e) => ({
  type: "DESCRIPTION_CHANGED",
  payload: e.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createAt`)
  return {
    type: "TODO_REQUEST",
    payload: request,
  }
}

export const add = (description) => {
  return dispatch => {
    axios.post(URL, { description })
      .then(resp => dispatch({ type: "TODO_ADDED", payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { done : true })
      .then(resp => dispatch ({ type: "TODO_DONE", payload: resp.data  }))
      .then(resp => dispatch(search()))
  }
}

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { done : false })
      .then(resp => dispatch ({ type: "TODO_PENDING", payload: resp.data  }))
      .then(resp => dispatch(search()))
  }
}