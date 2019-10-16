import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");

const routes = [  
  { path: "/login", 
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  { path: "/register", 
    component: Register ,
    meta: {
      requiresAuth: false
    }
  },
  { path: "*", 
    component: Login ,
    meta: {
      requiresAuth: false
    }
  },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
