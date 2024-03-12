<template>
    <div class="home">
      <h1>Welcome to Air Jordan Store</h1>
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :name="product.name" :image="product.image" :description="product.description" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  
  export default {
    name: 'HomeView',
    components: {
      ProductCard
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Air Jordan 1',
            image: require('@/assets/images/air-jordan-1.jpg'),
            description: 'Iconic first model of the Air Jordan line.'
          },
          {
            id: 2,
            name: 'Air Jordan 4',
            image: require('@/assets/images/air-jordan-4.jpg'),
            description: 'Released in 1989, designed by Tinker Hatfield.'
          },
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  </style>
  