<template>
    <form @submit.prevent="submitFunction" class=".container">
        <div class="blog-left">
            <div class="blog">
                <h3 id="title">Sign Up</h3>
                <div class="input" id="names">
                    <i class="fa-solid fa-user"></i>

                    <input v-model="name" type="text" placeholder="Pet name" required>
                </div>
                <div class="input">
                    <i class="fa-solid fa-envelope"></i>
                    <input v-model="email" type="email" placeholder="Email" required>
                </div>
                <div class="input">
                    <i class="fa-solid fa-lock"></i>
                    <input v-model="password" type="password" placeholder="Password" required>
                </div>

                <button type="submit" :disabled="isLoading" class="hero-btn red-btn">{{ isLoading ? 'Loading...' : 'Addpet to the Family' }}</button>
                <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                <p>I already have an account <a href="#">Click Here!</a></p>
                <div class="btn-field">
                    <!-- <button id="up">Sign up</button> -->
                    <router-link to="/logIn"><button>Sign In</button></router-link>
                </div>
            </div>
        </div>
    </form>
</template>
<script setup>

import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'
import { ref } from 'vue'
import {db} from '../../firebase'
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const email = ref('')
const password = ref('')
const name = ref('')

const submitFunction = async () => {
    isLoading.value = true
    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value).then((res) => {
                console.log(res);
                setDoc(doc(db, 'pets', res.user.uid),
                    {
                        name: name.value,
                        email: email.value
                    })
                successMessage.value = 'User created successfully';
                console.log("hey");
            }).catch((err) => { alert(err)});
    } catch (e) {
        alert("something goes wrong")
    }
    isLoading.value = false;
    console.log(auth.currentUser);
}

</script>

<style>
.blog {
    top: 0;
}

.container {
    top: 0;
    margin-top: 1%;
    width: 90%;
    max-width: 450px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #658494;
    padding: 50px 60px 80px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.input i {
    margin-right: 10px;
}

.hero-btn {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    top: 0;
    border-radius: 5px;
}

.red-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.success-message {
    color: green;
    margin-top: 20px;
}
</style>
