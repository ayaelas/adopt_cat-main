<template>
  <Loading v-show="!dataReady" />
  <petCard
        v-show="dataReady"
        v-for="pet in petsfil"
        :pet="pet"
        :key="pet.id"
    ></petCard>
</template>
<script setup>
import cardCoach from "../components/petCard.vue";
import {db} from '../../firebase.js';
import {getDocs, collection} from 'firebase/firestore';
let allpets = [];
</script>






