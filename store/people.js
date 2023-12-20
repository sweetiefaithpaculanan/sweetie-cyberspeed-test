import peopleService from "~/services/people"

export const state = () => ({
  people: [],
})
export const actions = {
  async getPeople({ commit }) {
    return await peopleService(this.$axios)
      .getPeople()
      .then((response) => {
        return response.results;
      })
  }
}
export const getters = {
}
