<template>
    <div class="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - Quantity: {{ item.quantity }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        cartItems: [
          { id: 1, name: 'Product 1', quantity: 2 },
          { id: 2, name: 'Product 2', quantity: 1 }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .shopping-cart {
    margin-top: 20px;
  }
  
  .shopping-cart h2 {
    margin-bottom: 10px;
  }
  
  .shopping-cart ul {
    list-style: none;
    padding: 0;
  }
  
  .shopping-cart li {
    margin-bottom: 5px;
  }
  </style>
  