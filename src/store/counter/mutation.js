export const increment = (state) => {
  state.count++
}
export const incrementBy = (state, value) => {
  state.count += value
}
export const setLoading = (state, val) => {
  state.isLoading = val
}
