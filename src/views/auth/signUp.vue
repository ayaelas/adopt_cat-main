<template>
    <div class="upper-section">

        <form @submit.prevent="submitFunction" class=".container">
            <div class="blog-left">
                <div class="blog">
                    <h3 id="title">Sign Up</h3>
                    <div class="input" id="names">
                        <i class="fa-solid fa-user"></i>

                        <input v-model="name" type="text" placeholder="username" required>
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-envelope"></i>
                        <input v-model="email" type="email" placeholder="Email" required>
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-lock"></i>
                        <input v-model="password" type="password" placeholder="Password" required>
                    </div>

                    <button type="submit" :disabled="isLoading" class="hero-btn red-btn">{{ isLoading ? 'Loading...' :
                        'Add pet to the Family' }}</button>
                    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                    <p>Already have an account !</p>
                    <div class="btn-field">
                        <router-link to="/petsList"><button id="up">Check Our Pets</button></router-link>
                        <router-link to="/logIn"><button>Sign In</button></router-link>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>

import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'
import { ref } from 'vue'
import { db } from '../../firebase'
import router from '../../router'
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
                    username: name.value,
                    email: email.value
                })
            successMessage.value = 'User created successfully';
            router.push('/logIn')
        }).catch((err) => { alert(err) });
    } catch (e) {
        alert("something goes wrong")
    }
    isLoading.value = false;
    console.log(auth.currentUser);
}

</script>

<style>
.blog {
    text-align: center;
    margin-top: -45%;
    border-radius: 4%;

}

.upper-section {
    
    background-image: url('pics/signup.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    top: 0;
    margin-top: 1%;
    width: 90%;
    max-width: 450px;
    position: absolute;
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

/*image*/
.upper-section {
    text-align: center;
    /* Center the image horizontally */
    margin-bottom: 10px;
    /* Add some space between the image and the form */
}

.upper-section img {
    max-width: 100%;
    /* Ensure the image scales down if it's too large */
    height: auto;
    /* Maintain aspect ratio */
    border-radius: 20px;
    /* Optional: round the corners of the image */
} 
p {
    font-size: 20px;
    text-align: center;
    margin-top: auto;
    text-shadow: #ccc;
}
</style>
