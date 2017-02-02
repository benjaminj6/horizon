import { GET_CURRENT_TARGET } from './actionTypes'

const targetIndexes = {
  sunrise: 3,
  sunset: 5
}

export default (status) => {
  return {
    type: GET_CURRENT_TARGET,
    target: /^waiting_/.test(status) ? targetIndexes[status.split('_')[1]] : null
  }
}
