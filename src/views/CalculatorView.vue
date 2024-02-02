<template>
    <div class="calculator">
        <h1 class="text-lg font-semibold p-1">Calculator</h1>
        <div class="grid grid-cols-4 gap-1">
            <input class="input input-lg border-2 border-neutral col-span-4" v-model="screen"/>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary" @click="screenClear()">CE</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType('sqrt(')">&Sqrt;x</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType('^(')">x<sup>2</sup></button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType('%')">%</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('9')">9</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('8')">8</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('7')">7</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary" @click="keypadType('*')">&times;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('6')">6</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('5')">5</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('4')">4</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary" @click="keypadType('/')">&divide;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('3')">3</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('2')">2</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('1')">1</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary" @click="keypadType('+')">+</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType('.')">.</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType('pi')">&pi;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('0')">0</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary" @click="keypadType('-')">-</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType('(')">&#40;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent" @click="keypadType(')')">&#41;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg col-span-2 bg-primary" @click="funcEval()">=</button>
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
                try {
                    this.screen = evaluate(this.screen).toString();
                } catch (error) {
                    this.screen = '3RR0R'
                }
            }
        }
    }
</script>