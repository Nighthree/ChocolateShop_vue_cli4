<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/backstage/productlist" class="nav-link">
              <span data-feather="home"></span>
              產品管理
              <span class="sr-only">(current)</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/backstage/orderlist" class="nav-link">
              <span data-feather="home"></span>
              訂單管理
              <span class="sr-only">(current)</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/backstage/couponlist" class="nav-link">
              <span data-feather="home"></span>
              優惠券
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
