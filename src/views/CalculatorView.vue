<template>
    <div class="calculator">
        <h1 class="text-lg font-semibold p-1">Calculator</h1>
        <div class="grid grid-cols-4">
            <textarea class="textarea textarea-bordered w-full resize-none col-span-4" v-model="screen"></textarea>
            <button type="button" class="btn" @click="screenClear()">C</button>
            <button type="button" class="btn" @click="keypadType('SIN')">SIN</button>
            <button type="button" class="btn" @click="keypadType('COS')">COS</button>
            <button type="button" class="btn" @click="keypadType('TAN')">TAN</button>
            <button type="button" class="btn" @click="keypadType('^')">^</button>
            <button type="button" class="btn" @click="keypadType('sqrt')">&Sqrt;</button>
            <button type="button" class="btn" @click="keypadType('/')">&divide;</button>
            <button type="button" class="btn" @click="keypadType('*')">&times;</button>
            <button type="button" class="btn" @click="keypadType('-')">-</button>
            <button type="button" class="btn" @click="keypadType('+')">+</button>
            <button type="button" class="btn" @click="keypadType('9')">9</button>
            <button type="button" class="btn" @click="keypadType('8')">8</button>
            <button type="button" class="btn" @click="keypadType('7')">7</button>
            <button type="button" class="btn" @click="keypadType('6')">6</button>
            <button type="button" class="btn" @click="keypadType('5')">5</button>
            <button type="button" class="btn" @click="keypadType('4')">4</button>
            <button type="button" class="btn" @click="keypadType('3')">3</button>
            <button type="button" class="btn" @click="keypadType('2')">2</button>
            <button type="button" class="btn" @click="keypadType('1')">1</button>
            <button type="button" class="btn" @click="keypadType('0')">0</button>
            <button type="button" class="btn" @click="keypadType('.')">.</button>
            <button type="button" class="btn" @click="keypadType('pi')">&pi;</button>
            <button type="button" class="btn col-span-2" @click="funcEval()">=</button>
        </div>
    </div>
</template>
<script>
    import { evaluate } from "mathjs";
    export default {
        data(){
            return {
                screen: '',
            }
        },
        methods: {
            screenClear(){
                this.screen = ''
            },
            keypadType(key){
                this.screen = this.screen.concat(key)
            },
            funcEval(){
                this.screen = evaluate(this.screen).toString();
            }
        }
    }
</script>