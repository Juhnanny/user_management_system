<template>
	<div class="customers container">
		<Alert v-if='alert' :message="alert"></Alert>
		<h3 class="page-header">用户管理系统</h3>
		<input type="text" class='form-control' placeholder="搜索" v-model='searchContent'>
		<br>
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th>姓名</th>
					<th>电话</th>
					<th>邮箱</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='customer in filterBy(customers, searchContent)'>
					<td>{{customer.name}}</td>
					<td>{{customer.phone}}</td>
					<td>{{customer.email}}</td>
					<td><router-link class="btn btn-default btn-sm" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
				</tr>
			</tbody>
		</table>	
	</div>
</template>

<script>
	import Alert from './Alert.vue'
	export default {
		name: 'customers',
	    data () {
	        return {
	            customers: [],
	            alert: '',
	            searchContent: ''
	        }
	    },
	    methods: {
	    	fetchCustomers() {
	    		this.$http.get("http://localhost:3000/users")
	    		.then(function(response){
	    			this.customers = response.body
	    		})
	    	},
	    	filterBy(customers, searchContent) {
	    		return customers.filter(function(customer){
	    			return customer.name.match(searchContent) || customer.phone.match(searchContent) || customer.email.match(searchContent);
	    		})
	    	}
	    },
	    created() {
	    	if (this.$route.query.alert) {
	    		this.alert = this.$route.query.alert;
	    	}
	    	this.fetchCustomers();
	    },
	    updated() {
	    	this.fetchCustomers();
	    },
	    components: {
	    	Alert
	    }
	}
</script>

<style scoped>
	.customers{
		width: 80%;
		margin: auto;
	}
	.table>tbody>tr>td{
		vertical-align: middle;
	}

</style>