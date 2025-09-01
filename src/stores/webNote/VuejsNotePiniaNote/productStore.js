// stores/productStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductStore = defineStore("productStore", () => {
  // state
  const product = ref("Pinia");

  // getter
  const upperProduct = computed(() => product.value.toUpperCase());

  // action
  function setProduct(newProduct) {
    product.value = newProduct;
  };

  // return 必須列出要給外部用的東西
  return { product, upperProduct, setProduct };
});