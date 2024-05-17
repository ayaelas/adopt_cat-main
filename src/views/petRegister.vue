<template>
  <form @submit.prevent="submitFunction">
    <div>
      <label > petName </label>
      <input type="text" placeholder="enter your pet name" v-model="name" />
    </div>
    <div>
      <label > petGender </label>
      <input type="text" placeholder="enter its gender" v-model="gender" />
    </div>
    <div>
      <label > petRace </label>
      <input type="text" placeholder="enter its race" v-model="race"/>
    </div>
    <div>
      <label > petAge </label>
      <input type="text" placeholder="enter the age" v-model="age"/>
    </div>
    <div>
      <label > petOwnerContact </label>
      <input type="text" placeholder="enter your phone" v-model="ownerContact" />
    </div>
    <div>
      <input type="submit" value="Submit">
    </div>
  </form>
</template>
<script setup>
  import { ref } from 'vue';
  import { db } from '../firebase.js'
  import { doc, setDoc} from 'firebase/firestore'


  const name = ref('');
  const gender = ref('');
  const race = ref('');
  const age = ref(0);
  const ownerContact = ref('');

  const submitFunction = () => {
    const docRef = doc(db, 'pets', '15457834531');
    setDoc(docRef, {
      name: name.value,
      gender: gender.value,
      race: race.value,
      age: age.value,
      ownerContact: ownerContact.value,
    })
  }
</script>
