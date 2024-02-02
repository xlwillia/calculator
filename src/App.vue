<template>
  <header class="sm:max-lg:hidden">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <p class="text-xl">MultiTool</p>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink to="/">Calculator</RouterLink></li>
          <li><RouterLink to="/unitconverter">Unit Converter</RouterLink></li>
          <li><RouterLink to="/currencyconverter">Currency Converter</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <div class="btm-nav lg:hidden">
    <button class="text-primary" @click="$router.push('/')">
      <span class="material-symbols-outlined">calculate</span>
      <p>Calculator</p>
    </button>
    <button class="text-primary" @click="$router.push('unitconverter')">
      <span class="material-symbols-outlined">measuring_tape</span>
      <p>Unit Converter</p>
    </button>
    <button class="text-primary" @click="$router.push('currencyconverter')">
      <span class="material-symbols-outlined">currency_exchange</span>
      <p>Currency Converter</p>
    </button>
  </div>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>
