<template>
    <v-row>
        <v-col col="6">
            <h3 class="d-flex align-center">Starwars Characters <caption class="caption ml-3">(Click the list to view details)</caption></h3>
            <v-list v-if="people.length">
                <template v-for="(character, index) in people">
                    <character :character="character" @selectCharacter="selectCharacter"/>
                </template>
            </v-list>
            <p v-else class="caption text-italic mt-5">Fetching data...</p>
        </v-col>
        <v-col col="6" v-if="is_viewed" class="grey-bg pa-8">
            <div class="d-flex justify-space-between">
                <h3>Detailed View</h3>
                <v-btn color="grey" small fab depressed @click="is_viewed = false"><v-icon>mdi-close</v-icon></v-btn>
            </div>
            <character-details :currentCharacter="currentCharacter"/>
        </v-col>
    </v-row>
</template>

<script>
import characterDetails from '../components/character-details.vue'

export default {
  components: { characterDetails },
    data() {
        return {
            people: [],
            currentCharacter: {},
            is_viewed: false
        }
    },
    created() {
        this.getPeople()
    },
    methods: {
        getPeople() {
            this.$store.dispatch('people/getPeople').then((response) => {
                console.log('response', response)
                this.people = response;
            });
        },
        selectCharacter(character) {
            this.currentCharacter = character
            this.is_viewed = true
        }
    }
}
</script>

<style>
    .grey-bg {
        background-color: #eee;
    }
</style>