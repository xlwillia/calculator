<template>
    <div class="calculator">
        <h1 class="text-lg font-semibold p-1">Calculator</h1>
        <div class="grid grid-cols-4 gap-1">
            <div class="card border-solid border-4 border-secondary col-span-4">
                <div class="card-body">
                    <p>{{ screen }}</p>
                </div>
            </div>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="screenClear()">CE</button>
            <span class="col-span-3"></span>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('9')">9</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('8')">8</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('7')">7</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('*')">&times;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('6')">6</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('5')">5</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('4')">4</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('/')">&divide;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('3')">3</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('2')">2</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('1')">1</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('+')">+</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('0')">0</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('pi')">&pi;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('.')">.</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('-')">-</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType('(')">&#40;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="keypadType(')')">&#41;</button>
            <button type="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg col-span-2" @click="funcEval()">=</button>
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