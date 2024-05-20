<template>
  <div class="all">
    <form @submit.prevent="submitFunction">
      <div class="blog-left">
        <div class="blog">
          <h3 id="title">Log In</h3>
          <div class="input">
            <i class="fa-solid fa-envelope"></i>
            <input v-model="email" type="email" placeholder="Email" required>
          </div>
          <div class="input">
            <i class="fa-solid fa-lock"></i>
            <input v-model="password" type="password" placeholder="Password" required>
          </div>
          <router-link to="/petsList"><button type="submit" :disabled="isLoading" class="hero-btn red-btn">
            {{ isLoading ? 'Loading...' : 'login' }}
          </button></router-link>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          <p class="acc">don't have an account ? </p>
          <div class="btn-field">
            <router-link to="/signUp"><button>Sign Up</button></router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      successMessage: ''
    };
  },
  methods: {
    submitFunction() {
      
        }}
    };
</script>

<style scoped>
#title {
  color: #F16558;
}

.btn-field button {
  background-color: #B39877;
  margin-left: auto;
  color: black;
}

.all {
  background-image: url('pics/image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.blog-left {
  width: 100%;
}

.blog {
  margin-top: -40%;
  text-align: center;
  background-color: #E1D0B5;
  border-radius: 4%;
}

.input {
  margin: 10px 0;
}

.hero-btn.red-btn {
  background-color: #32a3e4;
  margin-left: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: #fff;
}

.success-message {
  color: green;
}

.acc {
  font-size: 20px;
}

input {
  margin-left: 13%;
}

.btn-field {
  margin-top: 20px;
}
</style>