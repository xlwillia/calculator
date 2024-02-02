<template>
  <header class="sm:max-lg:hidden">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <h1 class="text-xl">MultiTool</h1>
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
    <button id="calculatorNavBtn" class="text-primary active" @click="[$router.push('/'), activeNavButton('calculator')]">
      <span class="material-symbols-outlined">calculate</span>
      <p>Calculator</p>
    </button>
    <button id="unitNavBtn" class="text-primary" @click="[$router.push('unitconverter'), activeNavButton('unitconverter')]">
      <span class="material-symbols-outlined">measuring_tape</span>
      <p>Unit Converter</p>
    </button>
    <button id="currencyNavBtn" class="text-primary" @click="[$router.push('currencyconverter'), activeNavButton('currencyconverter')]">
      <span class="material-symbols-outlined">currency_exchange</span>
      <p>Currency Converter</p>
    </button>
  </div>
</template>
<script>
  export default {
    methods: {
      activeNavButton(button){
        switch (button) {
          case 'calculator':
            document.getElementById("calculatorNavBtn").classList.add('active');

            document.getElementById("unitNavBtn").classList.remove('active');
            document.getElementById("currencyNavBtn").classList.remove('active');
            break;
          case 'unitconverter':
            document.getElementById("calculatorNavBtn").classList.remove('active');

            document.getElementById("unitNavBtn").classList.add('active');

            document.getElementById("currencyNavBtn").classList.remove('active');

            break;
          case 'currencyconverter':
            document.getElementById("calculatorNavBtn").classList.remove('active');
            document.getElementById("unitNavBtn").classList.remove('active');

            document.getElementById("currencyNavBtn").classList.add('active');
            break;
          default:
            break;
        }
      }
    }
  }
</script>
