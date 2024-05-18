<template>
  <Loading v-show="catsLoaded" />
    <div class="bar p-3 justify-between relative rounded border-black flex w-[800px] max-w-[90%] mx-auto mt-5">
        <div class="flex gap-4 ">
            <button
            v-if="showSearch"
            @click="toggleSearch"
        >
            <box-icon class="search-icon w-8 h-8"
                name='search-alt-2'
            ></box-icon>
            </button>
            
        <input
            class="bg-white text-xl text-black border rounded p-1 searchBar"
            v-if="showSearch"
            type="text"
            v-model="searchQuery"
            @input="filterCats"
            placeholder="Search for a cat"
            
        >
        <button
            v-if="showSearch"
            @click="toggleSearch"
        >
            <box-icon
                name='arrow-back'
                class="arrow-back"
            ></box-icon>
        </button>
        </div>

        <button @click="showFilters =!showFilters" class="filter-icon">
                <box-icon name='filter'></box-icon>
        </button>
        
        <div
        v-show="showFilters"
        v-on-click-outside="cancelFilter"
        class="bg-blue-200 opacity-80 absolute right-2 flex flex-col p-4 rounded-md shadow-md transition-all duration-300 ease-in-out"
        >
            <div class="flex justify-between gap-4">
            <div class="mb-4 px-3 py-3 rounded-md hover:shadow-md">
                <h3 class="text-teal-900 mb-2">Breed:</h3>
                <label
                v-for="breed in breeds"
                :key="breed"
                class="flex items-center mb-2 last:mb-0"
                >
                    <input type="checkbox" :value="breed" v-model="selectedBreeds" class="mr-2" />
                        <span >{{ breed }}</span>
                </label>
            </div>
            <div class="mb-4 px-3 py-3 rounded-md hover:shadow-md">
                <h3 class="text-teal-900 mb-2">Age Group:</h3>
                <label
                v-for="age in ageGroups"
                :key="age"
                class="flex items-center mb-2 last:mb-0"
                >
                    <input type="checkbox" :value="age" v-model="selectedAges" class="mr-2" />
                        <span>{{ age }}</span>
                </label>
            </div>
            </div>
            <div class="flex justify-center gap-5">
                <button
                @click="cancelFilter"
                class="bg-white text-teal-600 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                >
                Cancel
                </button>
                <button
                @click="applyFilter"
                class="bg-white text-teal-600 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                >
                Apply
                </button>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-r from-white to-blue-200  w-[800px] max-w-[90%] mx-auto grid gap-4 p-4 rounded-lg shadow mt-5">
    <div class="flex justify-end">
        <router-link to="/adopt">
            <button  class=" bg-teal-100 hover:bg-teal-950 text-black font-bold py-2 px-4 rounded ">Adopt a Cat</button>
        </router-link>
    </div>
    <catCard
        v-show="catsLoaded"
        v-for="cat in filteredCats"
        :cat="cat"
        :key="cat.id"
    ></catCard>
    <div v-show="noCatsFound" class="text-black flex justify-center" >
        <div>
        <img src=""> </div>
        <span class="py-5" >No cats found</span> 
    </div>
    </div>

</template>



<!-- <script setup>

/*imports */

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore'

import { ref, onMounted } from 'vue'
import { db} from '../firebase'

/*ref */

const petsfil = ref([])
const dataReady = ref(false)
let allpets = ref([]);
/* funcs*/

onMounted(async () => {
  const cats = await getDocs(collection(db, 'pets'))
  cats.forEach(doc => {
    allpets.value.push({
      size: doc.data().size,
      id: doc.data().id,
      name: doc.data().name,
      data: doc.data()
    });
  })
  petsfil.value = allpets.value;
  dataReady.value = true;
})

</script> -->
<script setup>
import { ref, onMounted } from 'vue';
import PetCard from '../components/petCard.vue';
import {db} from '../firebase.js';
import {getDocs, collection} from 'firebase/firestore';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Loading from '/components/loading.vue';

const router = useRouter();
const store = useStore();

const showFilters = ref(false);
const catsLoaded = ref(false);
const searchQuery = ref('');
let allCats = [];
const filteredCats = ref([]);
const showSearch = ref(false);
const selectedBreeds = ref([]);
const selectedAges = ref([]);
const noCatsFound = ref(false);

const breeds = ['Persian', 'Siamese', 'Maine Coon'];
const ageGroups = ['Kitten', 'Young Adult', 'Senior'];

onMounted(async () => {
    let cats = await getDocs(collection(db, 'cats'));
    cats.forEach((cat) => {
        allCats.push({
            id: cat.id,
            data: cat.data()
        });
    });
    filteredCats.value = allCats;
    catsLoaded.value = true;
});

const cancelFilter = () => {
    showFilters.value = false;
    selectedBreeds.value = [];
    selectedAges.value = [];
    filteredCats.value = allCats;
};

const applyFilter = () => {
    filteredCats.value = allCats.filter((cat) => {
        const hasSelectedBreed = selectedBreeds.value.every((breed) => cat.data.breed.includes(breed));
        const hasSelectedAge = selectedAges.value.every((age) => cat.data.ageGroup.includes(age));
        return hasSelectedBreed && hasSelectedAge;
    });
    if (filteredCats.value.length === 0) {
        noCatsFound.value = true;
    } else {
        noCatsFound.value = false;
    }
    showFilters.value = false;
};

const toggleSearch = () => {
    showSearch.value =!showSearch.value;
    searchQuery.value = '';
    filteredCats.value = allCats;
    noCatsFound.value = false;
};

const filterCats = () => {
    if (searchQuery.value) {
        filteredCats.value = searchCats(allCats, searchQuery.value);
        if (filteredCats.value.length === 0) {
            noCatsFound.value = true;
        } else {
            noCatsFound.value = false;
        }
    } else {
        filteredCats.value = allCats;
    }
};

function searchCats(cats, searchQuery) {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const searchRegex = new RegExp(lowerCaseSearchQuery.toLowerCase(), 'i');
    return cats.filter(cat => {
        function searchInData(data) {
            if (typeof data === 'string') {
                return searchRegex.test(data);
            } else if (Array.isArray(data)) {
                return data.some(item => searchInData(item));
            } else if (typeof data === 'object' && data!== null) {
                return Object.values(data).some(value => searchInData(value));
            }
            return false;
        }
        return searchInData(cat.data);
    });
}
</script>
