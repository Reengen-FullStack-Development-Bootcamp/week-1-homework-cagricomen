<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <div class="d-flex flex-row">
        <img
          class="trivago"
          src="https://img.utdstc.com/icon/952/570/952570880feda6efe2b347243a8519907412d9ec88f7fe28cd2f997ca3530680:200"
          alt="trivago"
        />
        <p class="hotel mt-2 ml-1">Trivago</p>
      </div>
      <b-navbar-nav  class="ml-auto">
        <b-nav-item v-for="(item, indeks) in route" :key="indeks + 'a'">
          <router-link class="linkRoute" v-show="!item.hidden" :to="item.path" >{{item.display}}</router-link>
        </b-nav-item>
        
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import {routes} from './routes'
export default {
  name: "App",
  data() {
    return {
      route: routes
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hotel {
  color: white;
  font-size: 25px;
}
.navbar-dark .navbar-nav .nav-link {
  color: white !important;
  font-weight: bold;
}
.trivago {
  width: 50px;
  height: 50px;
}
.linkRoute{
  color: white;
  text-decoration: none !important;
}
.linkRoute:hover{
  font-size: 1.12rem;
  color: white;
}
</style>
