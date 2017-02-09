import { GET_LOCATION } from '../actions/constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        ...action.location
      }
    default:
      return state
  }
}
