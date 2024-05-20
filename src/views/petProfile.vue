<template>
  <div class="forms">
    <div class="cat-card">
      <img :src="cat.picLink" :alt="cat.name" class="cat-pic" />
      <h3 class="cat-name">{{ cat.name }}</h3>
      <h3 class="cat-gender">{{ cat.gender }}</h3>
      <h3 class="cat-age">{{ cat.age }}</h3>
      <h3 class="cat-race">{{ cat.race }}</h3>
      <button v-if="!catIsAdopted" @click.prevent="adoptCat" class="adopt-button">Adopt Me </button>
      <h3 v-if="catIsAdopted" class="adopted-button">Sorry! this cat is already adopted</h3>
    </div>
    <div v-show="showContacts" class="contact-modal">
      <div class="contact-content">
        <h3>This is the contact of the owner, please give him a call !</h3>
        <p>{{ cat.ownerContact }}</p>
        <router-link to="/landingPage">Go back to the home page</router-link>
      </div>
    </div>
    <form action="/submit-cat-info" method="POST" class="form">
      <label for="about">How did you find our pet ?</label>
      <input type="text" placeholder="Anything..."><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.adopted-button {
  background-color: red;
  font-size: 20px;
}

.contact-content h3 {
  color: #683D3D;
}

.contact-content p {
  color: black;
  font-size: 25px;
}

.form label {
  display: block;
  /* Makes the label take up the full width of its container */
  margin-bottom: 10px;
  margin-left: 17%;
  /* Adds some space below the label */
  font-weight: bold;
  /* Makes the text bold for emphasis */
  font-size: 1.2rem;
  /* Sets the font size to be slightly larger than the default */
  color: #cab5b5;
  /* Sets the text color to a dark gray for contrast */
}

.forms {
  display: flex;
}

.form,
.cat-card {
  display: inline-block;
  /* Allows elements to sit side by side */
  width: 45%;
  /* Adjust as needed */
  box-sizing: border-box;
  /* Includes padding and border in element's total width */
  padding: 20px;
  margin: 10px;
}

.cat-card {

  display: flex;
  flex-direction: column;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  margin-left: 10%;
  box-shadow: 0 4px 8px rgba(143, 73, 73, 0.1);
  max-width: 300px;
  background-color: rgb(156, 92, 92);
}

.cat-pic {
  width: 100%;
  border-radius: 10px;
}

.cat-name,
.cat-gender,
.cat-age,
.cat-race {
  margin: 10px 0;
  font-size: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #fff;
}

.adopt-button {
  margin-right: 10%;
  margin-top: 5%;
  padding-left: au to;
  padding-right: auto;
  background-color: #BC9191;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
}

.form {
  background-color: #9C5C5C;
  padding: 20px;
  border-radius: 8px;
  /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Subtle shadow for depth */
  width: 45%;
  /* Adjust as needed */
  margin: 10px;
  box-sizing: border-box;
}

.form button {
  background-color: #BC9191;
  color: rgb(255, 255, 255);
  margin-left: 35%;
  margin-top: 6%;
  padding: 10px 65px;
  font-size: 15px;
  border-radius: 5%;
}

.form input {
  margin-top: 20px;
  margin-left: 5%;

  padding: 40px 70px;
  border-radius: 3px;
  border: 3px solid #11122b;
  font-size: 30px;
  font-family: inherit;
  color: inherit;

  transition: all 0.3s;
}

.adopt-button:hover {
  background-color: #683D3D;
}

.contact-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
  /* Ensure it is on top of other elements */
}

.contact-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 80%;
}

.contact-content h3,
.contact-content p {
  margin: 10px 0;
}

.contact-content a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.contact-content a:hover {
  background-color: #0056b3;
}
</style>

<script setup>
import { getDoc, doc, setDoc } from '@firebase/firestore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../firebase'
import { ref } from 'vue'

const route = useRoute()
const catId = route.params.id
const cat = ref({})
const catIsAdopted = ref(null)
const showContacts = ref(false)

const adoptCat = () => {
  showContacts.value = true
  catIsAdopted.value = true
  setDoc(doc(db, 'pets', catId), {
    isAdopted: true,
  }, { merge: true })
}

onMounted(async () => {
  console.log(catIsAdopted)
  const res = await getDoc(doc(db, 'pets', catId))
  if (res.exists()) {
    cat.value = res.data()
    catIsAdopted.value = cat.value.isAdopted
  }
})


</script>