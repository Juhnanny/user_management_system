import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Customers from '../components/Customers'
import About from '../components/About'
import Add from '../components/Add'
import CustomerDetails from '../components/CustomerDetails'
import Edit from '../components/Edit'

Vue.use(VueRouter)

export default [
    {
      	path: '/',
      	name: 'Customers',
      	component: Customers
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About
    },
    {
    	path: '/add',
    	name: 'Add',
    	component: Add
    },
    {
    	path: '/customer/:id',
    	name: 'customerdetails',
    	component: CustomerDetails
    },
    {
    	path: '/edit/:id',
    	name: 'edit',
    	component: Edit
    }
]

