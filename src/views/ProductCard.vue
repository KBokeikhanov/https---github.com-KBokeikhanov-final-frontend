<template>
    <div class="product-card">
      <img :src="image" :alt="name">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      name: String,
      image: String,
      description: String
    },
    methods: {
      addToCart() {
        // Логика добавления товара в корзину
      }
    }
  }
  </script>
  
  <style scoped>
  /* Стили для карточки товара */
  .product-card {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  
  .product-card img {
    max-width: 100%;
  }
  
  .product-card button {
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .product-card button:hover {
    background-color: #0056b3;
  }
  </style>
  