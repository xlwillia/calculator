<template>
    <div class="converter">
        <h1 class="text-lg font-semibold p-1">Currency Converter</h1>
        <div class="flex flex-col w-full lg:flex-row p-1">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="leftScreen" @change="convert('left')"/>
                <select class="select select-bordered w-full max-w-xs" v-model="leftCurrency" @change="convert('right')">
                    <option :value=null selected disabled>Currency</option>
                    <option value="USD">US Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="GBP">Pound Sterling</option>
                    <option value="HUF">Hungarian Forint</option>
                    <option value="PLN">Polish Zloty</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="CHF">Swiss Franc</option>
                    <option value="ISK">Icelandic Krona</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CNY">Chinese Yuan Renminbi</option>
                    <option value="HKD">Hong Kong Dollar</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="ILS">Israeli Shekel</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="MYR">Malaysian Ringgit</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="PHP">Philippine Peso</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="THB">Thai Baht</option>
                    <option value="ZAR">South African Rand</option>
                </select>
            </div> 

            <div class="divider lg:divider-horizontal">=</div>

            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="rightScreen" @change="convert('right')"/>
                <select class="select select-bordered w-full max-w-xs" v-model="rightCurrency" @change="convert('left')">
                    <option :value=null selected disabled>Currency</option>
                    <option value="USD">US Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="GBP">Pound Sterling</option>
                    <option value="HUF">Hungarian Forint</option>
                    <option value="PLN">Polish Zloty</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="CHF">Swiss Franc</option>
                    <option value="ISK">Icelandic Krona</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CNY">Chinese Yuan Renminbi</option>
                    <option value="HKD">Hong Kong Dollar</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="ILS">Israeli Shekel</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="MYR">Malaysian Ringgit</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="PHP">Philippine Peso</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="THB">Thai Baht</option>
                    <option value="ZAR">South African Rand</option>
                </select>
            </div>
        </div>
    </div>
    <p>Information Gathered from the <strong class="text-info">European Central Bank</strong> using <strong class="text-info">Frankfurter API</strong></p>
</template>
<script>
    export default {
        data(){
            return {
                leftScreen: 0,
                leftCurrency: null,

                rightScreen: 0,
                rightCurrency: null,
            }
        },
        methods: {
            //Depends on the European Central Bank and uses Frankfurter API (https://www.frankfurter.app/)
            convert(screenChanged){
                const host = 'api.frankfurter.app';
                const leftCurrency = this.leftCurrency;
                const rightCurrency = this.rightCurrency;
                if (screenChanged === 'left') {
                    if (this.leftCurrency === this.rightCurrency) {
                        this.rightScreen = this.leftScreen;
                    } else {
                        fetch(`https://${host}/latest?amount=${this.leftScreen}&from=${leftCurrency}&to=${rightCurrency}`)
                        .then(res => res.json())
                        .then((data) => {
                            this.rightScreen = data.rates[this.rightCurrency]
                        })
                    }
                } else if (screenChanged === 'right') {
                    if (this.rightCurrency === this.leftCurrency) {
                        this.leftScreen = this.rightScreen;
                    } else {
                        fetch(`https://${host}/latest?amount=${this.rightScreen}&from=${rightCurrency}&to=${leftCurrency}`)
                        .then(res => res.json())
                        .then((data) => {
                            this.leftScreen = data.rates[this.leftCurrency]
                        })
                    }
                }

            }
        }
    }
</script>