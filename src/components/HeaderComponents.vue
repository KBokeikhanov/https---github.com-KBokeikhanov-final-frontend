<template>
    <header class="header">
      <h1 class="logo">Our Online Store</h1>
      <nav class="navigation">
        <ul class="menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponents'
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  .logo {
    font-size: 24px;
  }
  
  .navigation {
    display: flex;
    justify-content: space-between;
  }
  
  .menu {
    list-style: none;
    display: flex;
  }
  
  .menu li {
    margin-right: 20px;
  }
  
  .menu li a {
    color: #fff;
    text-decoration: none;
  }
  
  .menu li a:hover {
    text-decoration: underline;
  }
  </style>
  