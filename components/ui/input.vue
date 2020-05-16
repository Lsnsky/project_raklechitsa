<template>
  <input
    :class="[
      'input',
      {
        input_data_exist: hasData,
        input_data_notexist: !hasData,
        input_bordered: bordered,
      },
    ]"
    :placeholder="placeholder"
    :type="type"
    autofocus
    @input="handleInput"
    v-model="content"
  />
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
    type: String,
    hasData: Boolean,
    bordered: Boolean,
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
      console.log(this.content);
    },
  },
};
</script>

<style scoped>
.input {
  display: block;
  border: none;
  outline: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid #eee;
}

.input_bordered {
  border: 1px solid #eee;
}

.input_data_exist {
  border-bottom: solid green 1px;
}

.input_data_notexist {
  border-bottom: solid red 1px;
}
</style>
