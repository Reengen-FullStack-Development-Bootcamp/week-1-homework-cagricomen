<template>
  <div>
    <b-card id="cont" class="mt-2" bg-variant="light">
      <b-form id="myForm"
        ><b-form-group
          label-cols-lg="3"
          :label="`${firstPerson}. Person`"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="input-1"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              size="sm"
              id="input-1"
              :ref="'form' + count"
              v-model="$v.form.name.$model"
              :state="$v.form.name.$error ? false : null"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Tel:"
            label-for="input-2"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              size="sm"
              id="input-2"
              style="tel"
              placeholder=""
              v-model="$v.form.tel.$model"
              :state="$v.form.tel.$error ? false : null"
              lazy
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Email:"
            label-for="input-3"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              size="sm"
              id="input-3"
              v-model="$v.form.email.$model"
              :state="$v.form.email.$error ? false : null"
              type="email"
              lazy
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="TCKN:"
            label-for="input-4"
            label-cols-sm="3"
            label-align-sm="right"
            style="position: relative"
          >
            <b-form-input
              size="sm"
              id="input-4"
              v-model="$v.form.tc.$model"
              :state="$v.form.tc.$error ? false : null"
              lazy
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="HES:"
            label-for="input-5"
            label-cols-sm="3"
            label-align-sm="right"
            style="position: relative"
          >
            <b-form-input
              size="sm"
              id="input-5"
              v-model="$v.form.hes.$model"
              :state="$v.form.hes.$error ? false : null"
              lazy
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Age:"
            label-for="input-6"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              size="sm"
              id="input-6"
              type="number"
              :ref="'age' + count"
              min="1"
              v-model="$v.form.age.$model"
              :state="$v.form.age.$error ? false : null"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-7"
            label="Gender:"
            label-for="input-7"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-select
              size="sm"
              id="input-7"
              v-model="$v.form.gender.$model"
              :state="$v.form.gender.$error ? false : null"
              :options="[
                { value: 'male', text: 'Male' },
                { value: 'female', text: 'Female' },
                { value: 'other', text: 'Other' },
              ]"
              required
            ></b-form-select>
          </b-form-group>
        </b-form-group>

        <b-button
          v-show="!isShow"
          @click="onSubmit"
          class="ml-5"
          variant="info"
          :ref="'btn' + count"
          >Submit</b-button
        >

        <b-button
          v-show="isShow"
          @click="nextPerson"
          class="m-1 align-self-center btn"
          variant="outline-primary"
          >Next</b-button
        >
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { validations } from "../mixins/validation";
export default {
  data() {
    return {
      count: 0,
      price: 0,
      firstPerson: 1,
      isShow: true,
      peoples: [],
      hotelName: ''
    };
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      console.log(this.peoples);
      if (!this.$v.$invalid) {
        var obj = new Object({
          name: this.$v.form.name.$model,
          age: parseInt(this.$v.form.age.$model),
        });
        this.peoples.push(obj);
        this.$router.push({
          path: `/hotel/view/reservation/payment`,
          query: { data: this.peoples, price: this.price, nameHot: this.hotelName },
        });
      }
    },
    nextPerson() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        var ccc = parseInt(this.count);
        this.firstPerson++;
        var obj = new Object({
          name: this.$v.form.name.$model,
          age: parseInt(this.$v.form.age.$model),
        });
        this.peoples.push(obj);

        if (ccc === this.firstPerson) {
          this.isShow = false;
        }
        document.getElementById("myForm").reset();
        this.$refs[`form${this.count}`].focus();
      }
    },
  },
  created() {
    this.count = this.$route.params.count;
    this.hotelName = this.$route.params.name
    this.price = parseInt(this.$route.params.price)
    if (this.count == 1) {
      this.isShow = false;
    }
  },
  mixins: [validations],
};
</script>

<style  scoped>
#cont {
  left: 20% !important;
  width: 50% !important;
  height: 50% !important;
  top: 25px;
}
</style>