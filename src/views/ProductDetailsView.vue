<template>
  <div class="product-details">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {}
    };
  },
  methods: {
    addToCart() {
    }
  },
  created() {
    const productId = this.$route.params.id;
    this.product = {
      id: productId,
      name: `Product ${productId}`,
      description: `Description of Product ${productId}`
    };
  }
}
</script>

<style scoped>
.product-details {
  margin-top: 20px;
}

.product-details h2 {
  margin-bottom: 10px;
}
</style>
