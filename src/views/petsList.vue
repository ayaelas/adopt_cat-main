<template>
    <Loading v-show="!catsLoaded" />
    <div>
        <div class="search-container">
            <button v-if="showSearch" @click="toggleSearch" class="search-button">
                <box-icon name='search-alt-2'></box-icon>
            </button>
            <input v-if="showSearch" type="text" v-model="searchQuery" @input="filterCats"
                placeholder="Search for a cat" class="search-input">
            <button v-if="showSearch" @click="toggleSearch" class="back-button">
                <box-icon name='arrow-back'></box-icon>
            </button>
        </div>
        <button @click="showFilters = !showFilters" class="filter-icon">
            <box-icon name='filter'></box-icon>
        </button>
        <div v-show="showFilters" v-on-click-outside="cancelFilter" class="filter-menu">
            <div class="filter-group">
                <div class="filter-item">
                    <h3 class="filter-title">Breed:</h3>
                    <label v-for="breed in breeds" :key="breed" class="filter-label">
                        <input type="checkbox" :value="breed" v-model="selectedBreeds" class="filter-checkbox" />
                        <span>{{ breed }}</span>
                    </label>
                </div>
                <div class="filter-item">
                    <h3 class="filter-title">Age Group:</h3>
                    <label v-for="age in ageGroups" :key="age" class="filter-label">
                        <input type="checkbox" :value="age" v-model="selectedAges" class="filter-checkbox" />
                        <span>{{ age }}</span>
                    </label>
                </div>
            </div>
            <div class="filter-actions">
                <button @click="cancelFilter" class="filter-button">Cancel</button>
                <button @click="applyFilter" class="filter-button">Apply</button>
            </div>
        </div>
    </div>
    <div class="main-container">
        <div class="h">
            <label class="l">Welcome To the Fam</label>
        </div>
        <router-link to="/register">
            <button class="adopt-button">Add a new pet to the Family</button>
        </router-link>

    </div>


    <div class="main-container">

        <petCard v-show="catsLoaded" v-for="cat in filteredCats" :cat="cat" :key="cat.id"></petCard>
        <div v-show="noCatsFound" class="no-cats">
            <div>
                <img src="">
            </div>
            <span>No pets found</span>
        </div>
        
      
      
    </div>
</template>

<style>
.main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* Creates two columns of equal width */
    gap: 20px;
}

.search-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.search-button,
.back-button {
    background: none;
    border: none;
    cursor: pointer;
}

.search-input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 5px;
}

.filter-icon {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
}

.filter-menu {
    background-color: #1fcee6;
    opacity: 0.8;
    position: absolute;
    right: 2rem;
    flex-direction: column;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.filter-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.filter-item {
    padding: 1rem;
    border-radius: 5px;
    transition: box-shadow 0.2s ease-in-out;
}

.filter-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.filter-title {
    color: #004d40;
    margin-bottom: 0.5rem;
}

.filter-label {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.filter-checkbox {
    margin-right: 0.5rem;
}

.filter-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.l {
    color: #00796B;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bolder;
    margin-left: 30%;
    transition: background-color 0.2s ease-in-out;
}

.filter-button {
    background-color: #ffffff;
    color: #00796b;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.filter-button:hover {
    background-color: #b2dfdb;
}

.main-container {
    background: linear-gradient(to right, #C4E3FC, #498586);
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
}

.adopt-button {
    background-color: #00796b;
    color: #fff;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-left: 40%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.adopt-button:hover {
    background-color: #b2ebf2;
    color: black;
}

.no-cats {
    text-align: center;
    color: #000000;
}

.no-cats img {
    max-width: 100%;
}

.no-cats span {
    display: block;
    padding-top: 1rem;
}
</style>


<script setup>
import { ref, onMounted } from 'vue';
import petCard from '../components/petCard.vue';
import { db } from '../firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import Loading from '../components/loading.vue';

const router = useRouter();

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
    let cats = await getDocs(collection(db, 'pets'));
    cats.forEach((cat) => {
        allCats.push({
            id: cat.id,
            data: cat.data()
        });
    });
    filteredCats.value = allCats;
    catsLoaded.value = true;
    console.log(filteredCats.value);
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
    showSearch.value = !showSearch.value;
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
            } else if (typeof data === 'object' && data !== null) {
                return Object.values(data).some(value => searchInData(value));
            }
            return false;
        }
        return searchInData(cat.data);
    });
}
</script>
