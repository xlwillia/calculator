<template>
    <h1 class="text-6xl md:text-3xl lg:text-lg font-semibold p-1">Calculator</h1>
    <!--Sizing is not perfect and needs more work-->
    <div class="grid grid-cols-4 gap-1">
        <input class="input input-bordered input-primary min-h-80 lg:min-h-16 col-span-4 text-8xl lg:text-2xl" v-model="screen"/>

        <button type="button" class="btn bg-secondary min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="screenClear()">CE</button>
        <button type="button" class="btn bg-accent min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('sqrt(')">&Sqrt;x</button>
        <button type="button" class="btn bg-accent min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('^(')">x<sup>2</sup></button>
        <button type="button" class="btn bg-secondary min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('%')">%</button>

        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('9')">9</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('8')">8</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('7')">7</button>
        <button type="button" class="btn bg-secondary min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('*')">&times;</button>
        
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('6')">6</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('5')">5</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('4')">4</button>
        <button type="button" class="btn bg-secondary min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('/')">&divide;</button>

        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('3')">3</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('2')">2</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('1')">1</button>
        <button type="button" class="btn bg-secondary min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('+')">+</button> 

        <button type="button" class="btn bg-accent min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('.')">.</button>
        <button type="button" class="btn bg-accent min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('pi')">&pi;</button>
        <button type="button" class="btn min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('0')">0</button>
        <button type="button" class="btn bg-secondary min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('-')">-</button>  

        <button type="button" class="btn bg-accent min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType('(')">&#40;</button>
        <button type="button" class="btn bg-accent min-h-72 lg:min-h-16 text-8xl lg:text-2xl" @click="keypadType(')')">&#41;</button>
        <button type="button" class="btn bg-primary min-h-72 lg:min-h-16 text-8xl lg:text-2xl col-span-2" @click="funcEval()">=</button>
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