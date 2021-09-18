import Vue from 'vue';
import Router from 'vue-router';


//auth routes
import login from '@/components/auth/login.vue';


//home routes
import index from '@/components/main/index.vue';
import homePage from '@/components/pages/home_page.vue';
import medpadStorePage from '@/components/pages/store_page.vue';


Vue.use(Router);


function autorization(to, from, next) {
    let isAuthenticated = false;
    //this is just an example. You will have to find a better or
    // centralised way to handle you localstorage data handling
    if (localStorage.getItem('token')) {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }


    if (isAuthenticated) {
        next(); // allow to enter route
    } else {
        next({ name: 'login' }); // go to '/login';
    }
}

export default new Router({
    routes: [{
            path: "/home",
            name: "home",
            beforeEnter: autorization,
            component: index,
            children: [{
                    path: '',
                    name: 'home',
                    component: homePage
                },
                {
                    path: '/medpad/store',
                    name: 'store',
                    component: medpadStorePage
                },

                {
                    path: '/medpad/add/device',
                    name: 'add-device',
                    component: medpadStorePage
                }

            ]
        },
        {
            path: '/',
            component: login
        },
        //redirect to login
        { path: '*', redirect: '/' }
    ]
});