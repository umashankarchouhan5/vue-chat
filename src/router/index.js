import VueRouter from "vue-router"
import ChatScreen from "../components/ChatScreen.vue"
import Message from "../components/Message.vue"
import Home from "../components/Home.vue"
import LogIn from "../components/LogIn.vue"
import AdminLogin from '../components/AdminLogin.vue'
import AdminDashboard from "../components/AdminDashboard.vue"
import LoginDashboard from "../components/LoginDashboard.vue"

import Vue from "vue"

Vue.use(VueRouter);

const router={
   mode:"history",
   routes:[
       {
           path:"/",
           component: Home
       },
       {
        path:"/chat",
        component: ChatScreen
    },
    {
        path:"/login",
        component: LogIn
    },
    { path:"/logindashboard",
    component:LoginDashboard

    },
    { path:"/adminlogin",
      component:AdminLogin

    },
    { path:"/admindashboard",
     component:AdminDashboard
      
    },
       {
           path:"/message",
           component:Message
       }
   ]
}
export default new VueRouter(router);