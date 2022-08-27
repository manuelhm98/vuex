import state from '../counter/state'
import * as mutations from '../counter/mutation'
import * as actions from '../counter/actions'
import * as getters from '../counter/getters'
const counterStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export default counterStore
