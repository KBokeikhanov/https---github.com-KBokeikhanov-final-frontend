<template>
  <div class="product-list">
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ]
    };
  }
}
</script>

<style scoped>
.product-list {
  margin-top: 20px;
}

.product-list h2 {
  margin-bottom: 10px;
}

.product-list ul {
  list-style: none;
  padding: 0;
}

.product-list li {
  margin-bottom: 5px;
}
</style>
