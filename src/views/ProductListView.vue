<template>
    <div class="product-list">
      <h1>Product List</h1>
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  
  export default {
    name: 'ProductListView',
    components: {
      ProductCard
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product 1',
            image: 'url_to_image_1',
            description: 'Description of Product 1'
          },
          {
            id: 2,
            name: 'Product 2',
            image: 'url_to_image_2',
            description: 'Description of Product 2'
          },
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .product-list {
    padding: 20px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  </style>
  