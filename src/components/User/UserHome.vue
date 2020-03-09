<template>
  <div>
    <Banner></Banner>
    <Cart></Cart>
    <section class="bg-lightChoco mb-5">
      <div class="container py-5" data-aos="fade-up">
        <h4 class="h1 pb-4 font-weight-bold text-center">好吃的秘訣</h4>
        <div class="row">
          <div class="col-md-4 text-center">
            <img
              class="mb-3"
              src="../../assets/images/handmade4.png"
              alt
            />
            <h6 class="h5">手工製作</h6>
            <p class="text-secondary">
              官方認證手工產品
              <br />每一個步驟都用愛心和細心
              <br />不做機器大量生產
              <br />每一顆巧克力都是用手小心呵護
            </p>
          </div>

          <div class="col-md-4 text-center">
            <img
              class="mb-3"
              src="../../assets/images/cold-shipping.png"
              alt
            />
            <h6 class="h5">冷藏運送</h6>
            <p class="text-secondary">
              從製造巧克力的溫控工作室
              <br />比利時到台灣的低溫空運
              <br />進而到台灣倉儲的15度C溫控倉儲
              <br />全程幫您保鮮到家
            </p>
          </div>

          <div class="col-md-4 text-center">
            <img
              class="mb-3"
              src="../../assets/images/Premium-quality1.png"
              alt
            />
            <h6 class="h5">優良品質</h6>
            <p class="text-secondary">
              從可可樹到巧克力豆
              <br />到烘培 發酵 研磨的製程
              <br />親自監度製作
              <br />符合最嚴格的章程
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container pb-5" data-aos="fade-up">
      <div class="row">
        <div class="col-12 col-md-6 d-flex justify-content-center flex-column py-4">
            <h4 class="h1 mb-3 font-weight-bold text-center">我們的任務</h4>
            <p class="text-secondary text-center">
              在這個巧克力大國裡
              <br />為您尋找最美味的巧克力
              <br />甚至新奇有趣的巧克力
              <br />只想帶給您不一樣的感官享受
            </p>
            <div class="d-flex justify-content-center">
              <router-link to="/about" class="btn btnChoco px-5">最新消息</router-link>
            </div>
        </div>

        <div class="col-12 col-md-6 text-center p-4">
          <img class="img-fluid rounded" src="../../assets/images/home-1.jpg" alt />
        </div>
      </div>
    </section>

    <section class="container-fluid bg-lightChoco" data-aos="fade-up">
      <div class="container py-4">
        <div class="row flex-row flex-md-row-reverse">
          <div class="col-md-6 col-12 d-flex flex-column justify-content-between pt-4">
            <h4 class="h1 mb-3 font-weight-bold text-center">吃巧克力的好處</h4>
            <p class="text-secondary textStyle">你知道每天吃適量的黑巧克力(約28克)已被證實可以改善許多常見的慢性健康問題嗎？</p>
            <p
              class="text-secondary textStyle"
            >黑巧克力含有益健康的天然抗氧化劑成分(如黃酮類、多酚類和黃烷醇類)，還被證實可降低心臟病(Heart disease)風險和促進大腦的健康。</p>
            <div class="d-flex justify-content-end">
              <router-link to="/know" class="p-3 text-Choco">看更多</router-link>
            </div>
          </div>
          <div class="col-md-6 col-12 d-flex align-items-center p-4">
            <img class="img-fluid rounded" src="../../assets/images/home-2.jpg" alt />
          </div>
        </div>
      </div>
    </section>

    <section class="container py-5" data-aos="fade-up">
      <h3 class="h1 mb-4 font-weight-bold text-center">店長推薦</h3>
      <div class="row">
        <div class="col-md-4 col-12 mb-3" v-for="item in pushProducts" :key="item.id">
          <a class="card cardList" @click.stop.prevent="createProduct(item.id)">
            <div
              class="bg-cover cardImgHeight"
              :style="{backgroundImage: `url(${ item.imageUrl })`}"
            >
              <div class="glass d-flex justify-content-center">
                <span>點擊查看更多</span>
              </div>
            </div>
            <div class="card-body p-3 position-relative pb-4">
              <span class="mb-2 badge badgeCategory">{{ item.category }}</span>
              <h5 class="card-title font-weight-bold mb-1">{{ item.title }}</h5>
              <div
                class="h6 font-weight-bold text-danger text-center"
                v-if="!item.price"
              >{{ item.origin_price | currency }} 元</div>
              <div
                class="h6 font-weight-bold text-danger"
                v-if="item.price"
              >{{ item.price | currency }} 元</div>
              <a
                href="#"
                title="加入購物車"
                class="btn btn-outline-danger addOneToCart p-2"
                @click.stop.prevent="addCart(item.id)"
              >
                <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading === item.id"></i>
                <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
              </a>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="position-relative" data-aos="fade-up">
      <img
        class="img-fluid"
        src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/about-full-img-2.jpg"
        alt
      />
      <router-link
        to="/products"
        class="btn btnToPro"
        style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)"
      >挑選更多精選巧克力</router-link>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/User/Banner.vue";
import Cart from "@/components/User/Cart.vue";

export default {
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    },
    pushProducts() {
      return this.products.filter(function(item) {
        return item.category === "精緻巧克力球";
      });
    }
  },
  components: {
    Banner,
    Cart
  },
  created() {
    this.getProducts();
  }
};
</script>
