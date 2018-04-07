<template>
    <div class="edit container">
    	<Alert v-if='alert' :message='alert'></Alert>
   		<form class="form-horizontal"  v-on:submit='editCustomer' role="form">
   			<div class="well">
   				<h3>编辑信息</h3>
	   			<div class="form-group">
				    <label for="inputName" class="col-sm-2 control-label">姓名</label>
				    <div class="col-sm-10">
				      	<input type="text" class="form-control" id="inputName" placeholder="name" v-model='customer.name'>
				    </div>
				</div>
				<div class="form-group">
				    <label for="inputPhone" class="col-sm-2 control-label">电话</label>
				    <div class="col-sm-10">
				      	<input type="text" class="form-control" id="inputPhone" placeholder="phone" v-model='customer.phone'>
				    </div>
				</div>
				<div class="form-group">
				    <label for="inputEmail" class="col-sm-2 control-label">邮箱</label>
				    <div class="col-sm-10">
				      	<input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model='customer.email'>
				    </div>
				</div>
				<div class="form-group">
				    <label for="inputEducation" class="col-sm-2 control-label">学历</label>
				    <div class="col-sm-10">
				      	<input type="text" class="form-control" id="inputEducation" placeholder="education" v-model='customer.education'>
				    </div>
				</div>
				<div class="form-group">
				    <label for="inputSchool" class="col-sm-2 control-label">毕业学校</label>
				    <div class="col-sm-10">
				      	<input type="text" class="form-control" id="inputSchool" placeholder="school" v-model='customer.school'>
				    </div>
				</div>
				<div class="form-group">
				    <label for="inputProfession" class="col-sm-2 control-label">职业</label>
				    <div class="col-sm-10">
				      	<input type="text" class="form-control" id="inputProfession" placeholder="profession" v-model='customer.profession'>
				    </div>
				</div>
				<div class="form-group">
				    <label for="inputProfile" class="col-sm-2 control-label">个人简介</label>
				    <div class="col-sm-10">
				      	<textarea class="form-control" rows="5" id="inputProfile" placeholder="profile" v-model='customer.profile'></textarea> 
				    </div>
				</div>
				<div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				     	<button type="submit" class="btn btn-primary pull-right">保存</button>
				    </div>
				</div>
   			</div>	
		</form>
    </div>
</template>

<script>
import Alert from './Alert'
export default {
    name: 'edit',
    data () {
        return {
            customer: [],
            alert: ''
        }
    },
    methods: {
    	fetchCustomers(id) {
	    		this.$http.get("http://localhost:3000/users/"+id)
	    		.then(function(response){
	    			console.log(response);
	    			this.customer = response.body
	    		})
	    },
    	editCustomer(e){
    		if(!this.customer.name || !this.customer.phone || !this.customer.email || !this.customer.education){
    			this.alert = '信息不完整！';
    		} else {
    			let editCustomer = {
    				name: this.customer.name,
    				phone: this.customer.phone,
    				email: this.customer.email,
    				education: this.customer.education,
    				school: this.customer.school,
    				profession: this.customer.profession,
    				profile: this.customer.profile
    			};
    			this.$http.put("http://localhost:3000/users/"+this.$route.params.id, editCustomer)
    				.then(function(response){
    					this.$router.push({path: '/', query: {alert: '用户信息修改成功！'}});
    				})
    			e.preventDefault();
    		}
    		e.preventDefault();
    	}
    },
    created() {
	    this.fetchCustomers(this.$route.params.id);
	},
	components: {
    	Alert
    }
}
</script>


<style scoped>
.edit{
	width: 60%;
	margin: auto;
}
.well{
	margin: 20px auto; 
	padding-left: 0;
}
h3{
	text-align: center;
	margin: 5px auto 15px;
}
</style>