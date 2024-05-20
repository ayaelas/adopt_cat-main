<template>
  <header>
    <div>
      <!-- Logo added here -->
      <img src="/src/views/auth/pics/logo.jpeg" alt="Company Logo" class="logo" />

    </div>

    <nav>
      <router-link to="/landingPage">
        <button> Home </button>
      </router-link>
      <router-link to="/contacter">
        <button> Contact Us </button>

      </router-link>
      <router-link to="signUp">
        <button> sign Up </button>

      </router-link>
      <router-link to="/logIn">
        <button> Sign In</button>

      </router-link>
    </nav>

    <div>

    </div>

  </header>
</template>
<style scoped>
/* Reset default margins and paddings */
* {
  background-color: #658494;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* General header styling */
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #658494;
  /* Light grey background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Subtle shadow for depth */
}

.logo {
  width: 80px;
  /* Set the width */
  height: 80px;
  margin-left: 25px;
  /* Set the height */
  object-fit: cover;
  /* Cover the entire area of the container */
  object-position: center;
  /* Center the image */
}

nav {

  margin-top: 20px;
  margin-left: 50%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  /* Space between nav items */
}

/* Router link styling */
.router-link-active>button,
.router-link-exact-active>button {
  background-color: #246a8f;
  /* Active link background */
  color: rgb(255, 255, 255);
  /* Active link text color */
}

/* Button styling */
button {

  background-color: #2a5369;
  /* Primary blue background */
  color: white;
  font-size: 16px;
  /* White text */
  border: none;
  padding: 10px 21px;
  /* Padding inside the button */
  cursor: pointer;
  /* Cursor changes to pointer on hover */
  border-radius: 5px;
  /* Rounded corners */
  transition: background-color 0.5s ease;
  /* Smooth background color change */
}

/* Hover effect on buttons */
button:hover {
  background-color: #849B9C;
  /* Darker shade on hover */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    /* Stack vertically on small screens */
    gap: 10px;
    /* Adjust spacing for smaller screens */
  }
}
</style>
