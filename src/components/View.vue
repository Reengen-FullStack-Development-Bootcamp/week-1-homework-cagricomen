<template>
  <div id="container">
    <h3 style="font-weight: bold" class="mt-2">{{ hotel.name }}</h3>
    <div class="card mb-3" style="max-width: 70rem">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="hotel.image[0]"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="d-flex flex-row">
              <i style="color: red" class="fas fa-map-marker-alt loca mt-1"></i>
              <h5 class="card-title ml-1">{{ hotel.location }}</h5>
            </div>
            <p
              style="font-weight: bold; font-size: 25px"
              class="card-text mt-2"
            >
              How many people will be make reservation?
            </p>
            <input
              type="number"
              min="1"
              v-model="peopleCount"
              class="form-control form-control-lg"
              placeholder="number of people?"
            />
            <router-link
              :to="{
                name: 'hotel-reservation',
                params: {
                  count: peopleCount,
                  price:  hotel.price,
                  name: hotel.name
                },
              }"
            >
              <b-button
                class="m-1 align-self-center btn"
                variant="outline-primary"
                >Confirm</b-button
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/dummyData.json";
export default {
  data() {
    return {
      id: this.$route.params.id,
      hotel: [],
      peopleCount: 1,
      price: 0,
    };
  },
  created() {
    this.hotel = data.hotels[this.id - 1];
  },
};
</script>

<style scoped>
#container {
  position: absolute;
  left: 10%;
}
</style>