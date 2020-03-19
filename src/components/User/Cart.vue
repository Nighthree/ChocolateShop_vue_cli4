<template>
  <div>
    <div class="fixedCart">
      <a
        class="btnCart d-flex justify-content-center align-items-center"
        data-toggle="modal"
        data-target="#cartModal"
      >
        <i class="fas fa-shopping-cart fa-2x"></i>
        <span class="badge badge-pill badge-danger">{{ cart.carts.length }}</span>
      </a>
    </div>
    <!-- Cart Modal -->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="cartModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModalTitle">您的購物車</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="cart.total == 0">
              <p class="text-center pt-4 pb-5 mb-0 h1">購物車還空空的喔！</p>
              <a class="btn btnChoco d-block" @click.prevent="hideCartModal">立刻選購</a>
            </div>

            <div v-if="cart.total !== 0">
              <h6 style="font-size: 12px;">已選擇商品</h6>
              <table class="table">
                <thead class="d-none">
                  <tr>
                    <th scope="col">刪除</th>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">金額</th>
                  </tr>
                </thead>
                <tbody style="font-size:14px">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <th class="px-1" scope="row">
                      <a class="d-block text-center" href="#" @click.prevent="delCart(item.id)">
                        <i class="far fa-trash-alt text-danger"></i>
                      </a>
                    </th>
                    <td class="px-1">{{ item.product.title }}</td>
                    <td class="text-right px-1">{{ item.qty }} {{item.product.unit}}</td>
                    <td class="text-right px-1">{{ item.total | currency }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right px-1">總計</td>
                    <td class="text-right px-1">{{ cart.total | currency }}</td>
                  </tr>
                </tfoot>
              </table>
              <a class="btn btnChoco d-block" @click.prevent="hideCartModal">結帳去</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    delCart(id) {
      this.$store.dispatch("delCart", id);
    },
    hideCartModal() {
      const vm = this;
      $("#cartModal").modal("hide");
      if (vm.cart.carts.length === 0) {
        vm.$router.push("/products");
      } else {
        vm.$router.push("/order");
      }
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  created() {
    this.getCart();
  }
};
</script>
