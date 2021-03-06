const INITIAL_STATE = { description: "", list:[{}] }
const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload }
    case "TODO_REQUEST":
      return { ...state, list: action.payload.data }
    case "TODO_ADDED":
      return { ...state, description: "" }
    default:
      return state
  }
}

export default todoReducer ;
