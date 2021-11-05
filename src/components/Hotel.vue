<template>
  <div class="cardss">
    <div class="shadow-lg" v-for="(hotel, indeks) in hotels" :key="indeks">
      <b-card class="cardaa" no-body style="max-width: 20rem" img-alt="Image" img-top>
        <div  >
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="40"
            img-height="40"
          >
            <b-carousel-slide
              v-for="(img, ind) in hotel.image"
              :key="ind + 'a'"
              :img-src="img"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <b-card-body class="d-flex flex-column">
          <b-card-title class="align-self-center">{{
            hotel.name
          }}</b-card-title>
          <b-card-text class="align-self-center">
            {{ hotel.description }}
          </b-card-text>
        </b-card-body>
        <b-card-body class="d-flex flex-column">
          <div class="d-flex flex-row align-self-center">
            <b-button
              v-b-toggle="`collapse-${hotel.id}`"
              class="m-1 align-self-center btn"
              variant="outline-primary"
              ><i class="fas fa-chevron-down"></i
            ></b-button>
            
              <router-link :to="{
                  name: 'hotel-view',
                  params: { id: hotel.id }
                }"><b-button
              v-b-tooltip.hover.right
              title="Reservation"
              class="m-1 align-self-center btn"
              variant="outline-primary"
            >
              <i class="fas fa-clipboard-list"></i></b-button>
              </router-link>
            
          </div>
        </b-card-body>
        <b-collapse :id="`collapse-${hotel.id}`">
          <b-list-group flush>
            <b-list-group-item
              ><div>
                Rating
                <span
                  v-for="(el, i) in hotel.rating"
                  :key="i"
                  class="fa fa-star checked"
                />
                <span
                  v-for="(el, i) in 5 - hotel.rating"
                  :key="'empty-' + i"
                  class="fa fa-star"
                /></div
            ></b-list-group-item>
            <b-list-group-item class="d-flex flex-row"
              ><i class="fas fa-money-bill-alt price mt-1"></i>
              <div class="ml-2 textPrice">{{ hotel.price }}TL</div>
            </b-list-group-item>
            <b-list-group-item class="d-flex flex-row">
              <i class="fas fa-map-marker-alt loca mt-1"></i>
              <div class="ml-2">{{ hotel.location }}</div></b-list-group-item
            >
          </b-list-group>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import data from "../assets/dummyData.json";
export default {
  data() {
    return {
      hotels: data.hotels,
    };
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}
.loca {
  color: red;
}
.price {
  color: rgb(3, 128, 3);
}
.cardss {
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  box-sizing: border-box;
}
.textPrice {
  font-weight: bold;
  color: green;
}
.cardaa {
  border-radius: 4px;

  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
}

.cardaa:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
