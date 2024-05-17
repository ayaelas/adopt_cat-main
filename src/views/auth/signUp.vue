<template>
    <form @submit="submitFunction" class=".container" action="form-handler.php" method="post">
        <div class="blog-left">
            <div class="blog">
                <h3 id="title">Sign Up</h3>
                <div class="input" id="names">
                    <i class="fa-solid fa-user"></i>

                    <input type="text" placeholder="Pet name" required>
                </div>
                <div class="input">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="input">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password" required>
                </div>

                <button type="submit" :disabled="isLoading" class="hero-btn red-btn">{{ isLoading? 'Loading...' : 'Add new pet to the Family' }}</button>

                <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                <p>Lost password? <a href="#">Click Here!</a></p>
                <div class="btn-field">
                    <button id="up">Sign up</button>
                    <router-link to = "/logIn" ><button >Sign In</button></router-link>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { getAuth } from "firebase/auth";
export default {
  data() {
    return {
      fullName: '',
      phoneNumber: '',
      petName: '',
      email: '',
      password: '',
      isLoading: false,
      successMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      this.successMessage = '';
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        this.successMessage = 'Your pet has been added!';
      } catch (error) {
        console.error(error);
        this.successMessage = 'An error occurred. Please try again.';
      } finally {
        this.isLoading = false;
      }
    }
  }
  const password = ref('');
  const email = ref('');

  const submitFunction = async (values) => {
    try {
       ;
        
    } catch (e) { 
        alert("Check again")
    }
    

};
};
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
