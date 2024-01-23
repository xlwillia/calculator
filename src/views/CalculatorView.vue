<template>
    <div class="calculator">
        <h1 class="text-lg font-semibold p-1">Calculator</h1>
        <div class="calcScreen p-1">
            <textarea class="textarea textarea-bordered w-full resize-none" v-model="screen"></textarea>
        </div>
        <div class="p-1 grid grid-cols-4">
            <button type="button" class="btn">C</button>
            <button type="button" class="btn">SIN</button>
            <button type="button" class="btn">COS</button>
            <button type="button" class="btn">TAN</button>
            <button type="button" class="btn">^</button>
            <button type="button" class="btn">&Sqrt;</button>
            <button type="button" class="btn">&divide;</button>
            <button type="button" class="btn">&times;</button>
            <button type="button" class="btn">-</button>
            <button type="button" class="btn">+</button>
            <button type="button" class="btn">9</button>
            <button type="button" class="btn">8</button>
            <button type="button" class="btn">7</button>
            <button type="button" class="btn">6</button>
            <button type="button" class="btn">5</button>
            <button type="button" class="btn">4</button>
            <button type="button" class="btn">3</button>
            <button type="button" class="btn">2</button>
            <button type="button" class="btn">1</button>
            <button type="button" class="btn">0</button>
            <button type="button" class="btn">.</button>
            <button type="button" class="btn">()</button>
            <button type="button" class="btn col-span-2">=</button>
        </div>
    </div>
</template>
<script>
    export default {
        mounted(){

        },
        data(){
            return {
                screen: '',
            }
        },
        methods: {

        }
    }
</script>