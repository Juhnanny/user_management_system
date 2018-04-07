<template>
    <div class="about container">
    	<h3 class="page-header">技术总结</h3>
   		<p>我们用vue.js+bootstrap开发了一套简易的用户管理系统。使用json-server模拟REST API，给前端提供数据。
   		使用vue-resource完成前后端数据的交互。实现了用户信息的增、删、改、查。</p>
   		<h3 class="page-header">项目地址</h3>
   		<p>Github地址：<a href='https://github.com/Juhnanny/user_management_system'>https://github.com/Juhnanny/user_management_system</a></p>
    </div>
</template>

<script>
export default {
    name: 'about',
    data () {
        return {
            
        }
    }
}
</script>


<style scoped>
.about{
	width: 65%;
	margin: auto;
}
p{
	padding: 5px 30px 10px 0;
	font-size: 16px;
	font-family: sans-serif;
}
</style>