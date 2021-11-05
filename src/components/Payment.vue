<template>
  <div>
    <b-card
      id="payment"
      header="Payment Screen"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="success"
      footer-tag="footer"
      footer-bg-variant="success"
      footer-border-variant="dark"
      :title="hotelName"
      style="max-width: 20rem"
    >
      <b-card-body>
        <b-card-text>
          <i style="color: green" class="fas fa-money-bill-alt price mt-1"></i>
          It is <strong style="color: green">{{ price }} TL</strong> per person
          per night.</b-card-text
        >
        <b-card-text
          >The reservation price for {{ data.length }} people is
          <strong style="color: green">{{ price *data.length }} TL</strong></b-card-text
        >
      </b-card-body>
      <div class="d-flex justify-content-center mt-4">
        <b-button
          v-b-modal.modal-1
          class="m-1 align-self-center btn payBtn"
          variant="outline-success"
          >Pay</b-button
        >
        <b-modal
          ok-only
          ok-title="Confirm"
          ok-variant="outline-success"
          @ok="doPay"
          id="modal-1"
          title="Pay"
        >
          <p class="my-4">
            You are about to pay
            <strong style="color: green">{{ price * data.length }} TL</strong>
            Do you confirm?
          </p>
        </b-modal>
      </div>
    </b-card>
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      data: [],
      price: 0,
      hotelName: this.$route.query.nameHot,
    };
  },
  components: {
    Loading,
  },
  methods: {
    doPay() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.pushHotel();
      }, 3000);
    },
    pushHotel() {
      this.isLoading = false;
      alert("Payment successful.");
      this.$router.push({ path: `/home` });
    },
  },
  created() {
    console.log(this.$route);
    this.data = this.$route.query.data;
    this.price = parseInt(this.$route.query.price);
    console.log(this.price);
  },
};
</script>

<style scoped>
#payment {
  width: 500px;
  height: 400px;
  left: 35%;
  top: 20px;
}
.payBtn {
  width: 100px;
}
</style>