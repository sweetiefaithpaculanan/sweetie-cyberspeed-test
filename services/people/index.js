export default ($axios) => {
  return {
    getPeople: async () => {
      return await $axios.$get('https://swapi.dev/api/people');
    }
  }
}
