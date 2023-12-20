<template>
    <v-list-item @click="selectCharacter(character)">
        <v-list-item-action><v-icon>mdi-account</v-icon></v-list-item-action>
        <v-list-item-title>{{character.name}}</v-list-item-title>
    </v-list-item>
</template>

<script>
export default {
    props: ['character'],
    methods: {
        selectCharacter(character) {
            this.$emit('selectCharacter', character)
        }
    }
}
</script>