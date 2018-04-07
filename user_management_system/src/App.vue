<template>
    <div id='app'>
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
              <div class="navbar-header">
                  <span class="navbar-brand">用户管理系统</span>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                      <li><router-link to='/'>主页</router-link></li>
                      <li><router-link to='/about'>关于</router-link></li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                      <li><router-link to='/add'>添加用户</router-link></li>
                  </ul>
              </div>
          </div>
        </nav>
        <div>
            <router-view></router-view> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.model-open{
  z-index: 99;
}
.navbar{
    padding: 0 130px;
}
.navbar-nav li{
    padding-left: 20px;
}
</style>
