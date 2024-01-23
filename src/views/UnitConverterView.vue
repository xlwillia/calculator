<template>
    <div class="converter">
        <h1 class="text-lg font-semibold p-1">Unit Converter</h1>
        <select class="select select-bordered w-full p-1">
            <option disabled selected>Type</option>
            <option>Length</option>
            <option>Temperature</option>
            <option>Area</option>
            <option>Volume</option>
            <option>Weight</option>
        </select>
        <div class="flex flex-col w-full lg:flex-row p-1">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="leftScreen"/>
                <select class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Mesurement</option>
                    <option>Inches</option>
                    <option>Feet</option>
                </select>
            </div> 
            <div class="divider lg:divider-horizontal">=</div> 
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="rightScreen"/>
                <select class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Mesurement</option>
                    <option>Inches</option>
                    <option>Feet</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted(){

        },
        data(){
            return {
                leftScreen: 0,
                rightScreen: 0,
            }
        },
        methods: {
            
        }
    }
</script>