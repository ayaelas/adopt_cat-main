import { createRouter, createWebHistory } from 'vue-router';
import landingPage from './views/ladingPage.vue';
import blogPage from './views/blogPage.vue';
import petsList from './views/petsList.vue';
import petProfile from './views/petProfile.vue';
import petRegister from './views/petRegister.vue';
import contacter from './views/contacter.vue';
import signUp from './views/auth/signUp.vue';
import logIn from './views/auth/logIn.vue';
import PetCard from './components/petCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/landingPage',
        component: landingPage,
      },
      {
        path: '/blog',
        component: blogPage,
      },
      {
        path: '/petsList',
        component: petsList,
      },
      {
        path: '/petCard',
        component: PetCard,
      },
      {
        path: '/pets/:id',
        component: petProfile,
        props: true,
        name: 'petProfile',
      },
      {
        path: '/register',
        component: petRegister,
      },
      {
        path: '/contacter',
        component: contacter,
      },
      {
        path: '/signUp',
        component: signUp,
      },
      {
        path: '/logIn',
        component: logIn,
      }
    ],
  }
);

export default router
