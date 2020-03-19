<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid">
      <div class="row">
        <Aside></Aside>
        <main role="main" class="col-md-10 ml-sm-auto px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Backstage/Navbar';
import Aside from '../components/Backstage/Aside';
import Alert from '../components/Alert';

export default {
  components: {
    Navbar,
    Aside,
    Alert
  }
}
</script>
