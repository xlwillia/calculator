<template>
    <div class="calculator">
        <h1 class="sm:text-6xl lg:text-lg font-semibold p-1">Calculator</h1>
        <!--Sizing is not perfect and needs more work-->
        <div class="grid grid-cols-4 gap-1">
            <input class="input sm:h-96 sm:py-72 lg:py-0 sm:text-8xl lg:input-lg lg:h-16 lg:text-lg border-2 border-neutral col-span-4" v-model="screen"/>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-secondary" @click="screenClear()">CE</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType('sqrt(')">&Sqrt;x</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType('^(')">x<sup>2</sup></button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType('%')">%</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('9')">9</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('8')">8</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('7')">7</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-secondary" @click="keypadType('*')">&times;</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('6')">6</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('5')">5</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('4')">4</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-secondary" @click="keypadType('/')">&divide;</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('3')">3</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('2')">2</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('1')">1</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-secondary" @click="keypadType('+')">+</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType('.')">.</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType('pi')">&pi;</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl" @click="keypadType('0')">0</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-secondary" @click="keypadType('-')">-</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType('(')">&#40;</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl bg-accent" @click="keypadType(')')">&#41;</button>
            <button type="button" class="btn min-w-full sm:size-60 sm:text-6xl lg:size-16 lg:text-xl col-span-2 bg-primary" @click="funcEval()">=</button>
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