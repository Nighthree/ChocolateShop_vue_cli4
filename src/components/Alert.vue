<template>
  <div>
    <div class="message-alert">
      <div
        class="alert alert-dismissible"
        :class="'alert-' + item.status"
        v-for="(item, i) in messages"
        :key="i"
      >
        {{ item.message }}
        <button
          type="button"
          class="close"
          @click="removeMessage(i)"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch("updateMessage", { message, status });
    },
    removeMessage(num) {
      this.$store.dispatch("removeMessage", num);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  }
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 80px;
  right: 20px;
  z-index: 2000;
}
</style>
