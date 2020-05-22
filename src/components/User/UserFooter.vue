<template>
  <div>
    <footer class="d-flex py-4 bg-Choco flex-column">
      <ul class="list-group list-group-horizontal justify-content-center">
        <li class="list-group-item border-0 h4 bg-Choco">
          <a href="#" class="text-white">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li class="list-group-item border-0 h4 bg-Choco">
          <a href="https://github.com/Nighthree/ChocolateShop_vue_cli4" class="text-white">
            <i class="fab fa-github-square"></i>
          </a>
        </li>
        <li class="list-group-item border-0 h4 bg-Choco">
          <router-link to="/login" title="登入後台" class="text-white">
            <i class="fas fa-user-cog"></i>
          </router-link>
        </li>
      </ul>
      <p class="text-center text-white">© Copright 2020 僅為作品無任何商業用途</p>
    </footer>
  </div>
</template>
