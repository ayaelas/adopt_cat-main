<template>
  <div>
    <section class="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12980.495434811784!2d-5.361072200000058!3d35.57533460000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11783215d4dfcc5d!2z2YXZhti42YXYqSDZg9i02KfZgdipINiz2YHYsdin2KEg2KfZhNiz2YTYp9mFINmB2LHYuSDYqti32YjYp9mGIC0gT1NBUCBUw6l0b3Vhbg!5e0!3m2!1sfr!2sma!4v1667863984780!5m2!1sfr!2sma"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </div>
  <section>

    <div class="contact-col"></div>
    <form @submit.prevent="sendEmail" action="form-handler.php" method="post" ref="form">

      <div class="blog">
        <h3>Contact Us</h3>
        <div class="input">
          <i class="fa-solid fa-user"></i>
          <input type="text" name="name" placeholder="Enter your name" required>
        </div>
        <div class="input">
          <i class="fa-solid fa-envelope"></i>
          <input type="email" name="email" placeholder="Enter your email" v-model="email" @focus="showPrompt = true"
            required>
          <p v-if="showPrompt = true" class="prompt-message">Please enter a valid email.</p>

        </div>
        <div class="input">
          <i class="fa-solid fa-prescription"></i>
          <input type="text" name="subject" placeholder="Enter your subject" required>
        </div>
        
        <button type="submit" class="hero-btn red-btn">Send Message</button>
      </div>
    </form>
  </section>

</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      email: '',
      showPrompt: false,
      showNotification: false,
      notificationMessage: '',
    };
  },
  methods: {
    hidePrompt() {
      this.showPrompt = false;

    },
    sendEmail() {
      emailjs.sendForm('service_uplkm2x', 'template_gkstw2r', this.$refs.form, {
        publicKey: 'lEhqutBLC5FxY40o2',
      })
        .then((result) => {
          this.showNotification = true;
          this.notificationMessage = ("Email successfuly sent ! ")
        }, (error) => {
          this.showNotification = true;
          this.notificationMessage = ("Failed to sent your email ! ")
        });
    }
  }
}


</script>





<style>
/* location*/
.location {
  width: 80%;
  margin: auto;

  padding: 5px 0;
}

.location iframe {
  width: 100%;
}

/* div */
.hero-btn {

  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 34px;
  font-size: 14px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background: transparent;
  position: relative;
  cursor: pointer;
}

.hero-btn:hover {
  border: 1px solid #881655;
  background: #091322;

  transition: 1s;
}

.red-btn {
  border: 1px solid #050303;
  background: transparent;
  color: #125553;
  font-size: large;

}

.prompt-message {
  color: #881655;
}

.blog {

  width: 90%;
  max-width: 450px;
  margin-top: 20%;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: #658494;
  padding: 50px 60px 80px;
  text-align: center;
}

.blog button {
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  color: #d9e6d9;
  background-color: #0E3142;
  font-size: 15px;
  margin-left: 8%;
  margin-top: 5%;
  font-weight: 600;
  border-radius: 20px;
}

.input {
  max-height: 70px;
  transition: max-height 0.5s;
  overflow: hidden;
  margin-left: 7%;
}

.input input {
  background-color: #fff;
  color: #000;
  font-size: 20px;
  padding: 7px 40px;
  margin-top: 5%;

}

.input textarea {
  font-size: 30px;
  margin-top: 5%;
  width: 90%;
  height: 20%;
  color: #cc1d1d;
  background: #234c61;
  padding: 20px 40px;
  text-align: center;
}

h3 {
  font-size: 30px;
  margin-bottom: 60px;
  color: #ffffff;
  position: relative;
}

.contact-col {
  flex-basis: 48%;
  margin-bottom: 30px;

}

.contact-col div {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
</style>
