<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 mr-0 text-center text-md-left" href="#">巧克力 後台</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signOut">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      const api = `${process.env.VUE_APP_API_PATH}/logout`;
      const vm = this;
      vm.$store.dispatch("pushLoadingStatu", true);
      vm.$http.post(api).then(response => {
        if (response.data.success) {
          vm.$store.dispatch("pushLoadingStatu", false);
          vm.$router.push("/login");
          vm.$store.dispatch("updateMessage", {
            message: "成功登出後台",
            status: "success"
          });
        }
      });
    }
  }
};
</script>
