<template>
    <v-row>
        <v-col cols="6" v-for="(field, key) in currentCharacter">
            <label for="" class="caption font-weight-bold">{{key}}</label>
            <p class="text-body-2 mb-0">{{field}}</p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ['currentCharacter']
}
</script>