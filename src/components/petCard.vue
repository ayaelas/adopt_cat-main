<template>
  <div>
    <img>
    <span>
      <p><router-link :to="{ name: 'petname', params: { id: pet.id, size: pet.size, data: pet.data.name} }">{{}}</router-link></p>

    </span>
  </div>
</template>
<script setup >

import { defineProps } from 'vue';
const props = defineProps({
  data() { },
  pet: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.hasOwnProperty('id') && value.hasOwnProperty('size') && value.hasOwnProperty('data') && value.hasOwnProperty('name');
    }
  }
});     

</script>