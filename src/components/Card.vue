<template>
  <div class="aaaa">
    <b-card
      :title="info.title"
      :img-src="info.image"
      img-alt="Image"
      img-top
      img-height="250"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 mt-5"
    >
      <b-card-text>{{ info.summary }}</b-card-text>
      <b-row class="d-flex flex-row justify-content-around">
        <div>
          <span v-for="(el,i) in info.rating" :key="i" class="fa fa-star checked" />
          <span v-for="(el,i) in (5 - info.rating)" :key="'empty-'+i" class="fa fa-star" />
          <p>Rating: {{info.rating}}</p>
        </div>
      </b-row>
      <b-row class="d-flex flex-row justify-content-around">
        <b-form-group>
          <b-form-checkbox-group
            v-model="selected"
            buttons
            button-variant="outline-secondary"
            name="buttons2"
            :options="options"
          ></b-form-checkbox-group>
        </b-form-group>
        <b-button :class="info.class" class="ml-3" @click="addToBasket(info)">Add To Chart</b-button>
          <b-badge  variant="light">{{ info.price* this.selected }} $</b-badge>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    info: Object
  },
  data() {
    return {
      selected: this.info.sizes[0],
      options: [
        { text: this.info.sizes[0], value: this.info.sizes[0] },
        { text: this.info.sizes[1], value: this.info.sizes[1] },
        { text: this.info.sizes[2], value: this.info.sizes[2] },
        { text: this.info.sizes[3], value: this.info.sizes[3] },
        { text: this.info.sizes[4], value: this.info.sizes[4] }
      ]
    };
  },
  methods: {
    addToBasket(val) {
        
        val.price = this.selected*this.info.price
        val.sizes = this.selected
      this.$emit("addCard", val);
    }
  }
};
</script>
<style scoped>
.pink {
  background-color: palevioletred;
}
.blue {
  background-color: #007ba7;
}
.checked {
  color: #007ba7;
}
.pinkChecked {
  color: palevioletred;
}
</style>