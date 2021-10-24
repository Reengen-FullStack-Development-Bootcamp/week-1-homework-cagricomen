<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Odev1</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-dropdown
              style="margin-right: 300px"
              size="lg"
              variant="light"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                &#128722;
                <b-badge variant="light">{{ basketAllItemCount }}</b-badge>
              </template>
              <b-dropdown-item v-show="basket.length === 0">sepet boş</b-dropdown-item>
              <b-dropdown-item v-for="(el,i) in basket" :key="i">
                {{ el.title }} - {{ (el.price * el.count).toFixed(2) }}$
                <b-button
                  class="mx-2"
                  @click="productCal({value: el, type: '-'})"
                  variant="dark"
                  size="sm"
                >-</b-button>
                <b-button
                  class="mx-2"
                  @click="productCal({value: el, type: '+'})"
                  variant="success"
                  size="sm"
                >+</b-button>
                <b-button @click="productCal({value: el, type: 'del'})" variant="danger" size="sm">X</b-button>
              </b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-row class="d-flex flex-row justify-content-around">
      <Card
        v-for="(item, i) in cardList"
        :key="i"
        :info="item"
        @addCard="productCal({value: $event, type: 'add'})"
      />
    </b-row>
  </div>
</template>

<script>
import Card from "./components/Card";
export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      cardList: [
        {
          title: "Nike Pink Shoe",
          summary: "Nike shoes are the best",
          rating: 4,
          price: 5,
          sizes: [39, 40, 41, 42, 43],
          image: require("./assets/pinkShoe.jpg"),
          class: "pink"
        },
        {
          title: "Nike Blue Shoe",
          summary: "Nike shoes are the best",
          rating: 5,
          price: 6,
          sizes: [39, 40, 41, 42, 43],
          image: require("./assets/blueShoe.jpg"),
          class: "blue"
        },
        {
          title: "Nike Blue Shoe",
          summary: "Nike shoes are the best",
          rating: 5,
          price: 6,
          sizes: [39, 40, 41, 42, 43],
          image: require("./assets/blueShoe.jpg"),
          class: "blue"
        },
        {
          title: "Nike Pink Shoe",
          summary: "Nike shoes are the best",
          rating: 3,
          price: 5,
          sizes: [39, 40, 41, 42, 43],
          image: require("./assets/pinkShoe.jpg"),
          class: "pink",
        }
      ],
      basket: []
    };
  },
  methods: {
    productCal(val) {
      let index = this.basket.findIndex(el => el.title === val.value.title);
      console.log(val)
      switch (val.type) {
        case "add":
          if (index >= 0) {
            this.basket[index].count++;
          } else {
            this.basket.unshift({ ...val.value, count: 1 });
          }
          break;
        case "+":
          this.basket[index].count++;
          break;
        case "-":
          if (this.basket[index].count > 1) {
            this.basket[index].count--;
          } else {
            this.basket.splice(index, 1);
          }
          break;
        case "del":
          this.basket.splice(index, 1);
          break;
        default:
      }
    }
  },
  computed: {
    basketAllItemCount() {
      let count = 0;
      for (let i = 0; i < this.basket.length; i++) {
        count += this.basket[i].count;
      }
      return count;
    }
  }
};
</script>
<style scoped>
.pink {
  color: palevioletred;
}

.blue {
  color: #007BA7;
}
</style>
