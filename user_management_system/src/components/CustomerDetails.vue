<template>
    <div class="details container">
    	<router-link class='btn btn-default btn-sm' to='/'>返回</router-link>	
    	<h2 class="page-header">
    		{{customer.name}}
    		
    		<span class="pull-right">
    			<router-link class='btn btn-primary btn-sm' :to="'/edit/'+customer.id">编辑</router-link>
    			<!-- Button trigger modal -->
    			<button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal">删除</button>
    			<!-- Modal -->
    			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  		<div class="modal-dialog" role="document">
				    	<div class="modal-content">
					      	<div class="modal-header">
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					      	</div>
					      	<div class="modal-body">
					        	<h4>是否删除{{customer.name}}的全部信息？</h4>
					      	</div>
					      	<div class="modal-footer">
						        <button type="button" class="btn btn-danger" @click="deleteCustomer(customer.id)">是</button>
						        <button type="button" class="btn btn-primary" data-dismiss="modal">否</button>
						    </div>
				    	</div>
				  	</div>
				</div>
    		</span>
    		
    	</h2>
    	<ul class="list-group">
    		<li class="list-group-item"><span class="glyphicon glyphicon-phone fa-fw"></span>{{customer.phone}}</li>
    		<li class="list-group-item"><span class="fa fa-envelope fa-fw"></span>{{customer.email}}</li>
    		<li class="list-group-item"><span class="fa fa-graduation-cap fa-fw"></span>{{customer.education}}</li>
    		<li class="list-group-item"><span class="fa fa-university fa-fw"></span>{{customer.school}}</li>
    		<li class="list-group-item"><span class="fa fa-id-badge fa-fw"></span>{{customer.profession}}</li>
    	</ul>
    	<textarea class="form-control" readonly rows='5'>个人简介：{{customer.profile}}</textarea>
    </div>
</template>

<script>
export default {
    name: 'customerdetails',
    data () {
        return {
            customer: ''
        }
    },
    methods: {
    	fetchCustomers(id) {
    		this.$http.get("http://localhost:3000/users/"+id)
    			.then(function(response){
	    			// console.log(response);
	    			this.customer = response.body;
    		})
    	},
    	deleteCustomer(id) {
    		this.$http.delete("http://localhost:3000/users/"+id)
    			.then(function(response){
    				this.$router.push({path: '/', query: {alert: '用户信息删除成功！'}});
    				$('#myModal').modal('hide');
    		})
    	}
    },
    created() {
    	this.fetchCustomers(this.$route.params.id);
    },
}
</script>


<style scoped>
.details{
	width: 50%;
	margin: auto;
}
.list-group .list-group-item span{
	margin-right: 15px;
}
</style>