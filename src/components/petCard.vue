<template>
  <div class="petCard">
    <img :src="cat.data.picLink" alt="" src="">
    
      <router-link :to="{ name: 'petProfile', params: { id: cat.id, data: cat.data.name} }">
    
    <h3>{{ cat.data.name }}</h3></router-link>
    
     <p>{{ cat.data.age }}</p>
   <p >{{ cat.data.race }}</p>
    <p>{{ cat.data.gender }}</p>
    <!-- <p> {{ cat.owner }} </p> -->
  </div>
  
</template>

<style>
.petCard {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  margin: 20px;
  padding: 20px;
}

.petCard img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
}

.petCard span {
  display: block;
  margin-top: 10px;
}

.petCard span p {
  margin: 0;
}

.petCard h3 {
  margin: 15px 0 10px;
  font-size: 24px;
  color: #333;
}

.petCard p {
  margin: 5px 0;
  color: #666;
}

.petCard p:first-of-type {
  margin-top: 10px;
}

.petCard p:last-of-type {
  margin-bottom: 0;
}

.petCard a {
  text-decoration: none;
  color: #007BFF;
}

.petCard a:hover {
  text-decoration: underline;
}
</style>

<script>
export default {
  props: {
    cat: {
      type: Object,
      required: true
    }
}
}
</script>
<style scoped>
.petCard {
  background-color: #00796B;
  border: 1px solid black;
  padding: 10px;
 
  color: white;
  display: inline-block;

  margin-right: 10px;
}
h3 {
  color: aliceblue;
  font-weight: lighter;
  margin-bottom: 0;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;}
p {
  color: rgb(3, 3, 3);
  margin-top: 0%;
  font-size: 20px;
}

</style>
