<template>
    <div class="converter">
        <h1 class="text-lg font-semibold p-1">Unit Converter</h1>
        <select class="select select-bordered w-full p-1 capitalize" v-model="selectedType">
            <option :value=null selected disabled>Select Measurement</option>
            <option v-for="measurementType in measurementTypes" :value="measurementType" class="capitalize">{{ measurementType }}</option>
        </select>
        <div class="flex flex-col w-full lg:flex-row p-1">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <input type="number" class="input input-bordered w-full max-w-xs" min="0" v-model="leftScreen" v-if="selectedType != null"/>
                <input type="number" class="input input-bordered w-full max-w-xs" min="0" v-model="leftScreen" v-else disabled/>
                <select v-if="selectedType === null" disabled class="select select-bordered w-full max-w-xs">
                    <option>Select Measurement</option>
                </select>
                <select class="select select-bordered w-full max-w-xs capitalize" v-model="leftSelectedUnit" v-else>
                    <option :value=null selected disabled>Select Unit</option>
                    <option v-if="selectedType === 'length'" v-for="unitType in unitTypes.length" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'temperature'" v-for="unitType in unitTypes.temperature" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'area'" v-for="unitType in unitTypes.area" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'volume'" v-for="unitType in unitTypes.volume" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'weight'" v-for="unitType in unitTypes.weight" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'data'" v-for="unitType in unitTypes.data" :value="unitType" class="capitalize">{{ unitType }}</option>
                </select>
            </div> 
            <div class="divider lg:divider-horizontal">=</div> 
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <input type="number" class="input input-bordered w-full max-w-xs" min="0" v-model="rightScreen" v-if="selectedType != null"/>
                <input type="number" class="input input-bordered w-full max-w-xs" min="0" v-model="rightScreen" v-else disabled/>
                <select v-if="selectedType === null" disabled class="select select-bordered w-full max-w-xs">
                    <option>Select Measurement</option>
                </select>
                <select class="select select-bordered w-full max-w-xs capitalize" v-model="rightSelectedUnit" v-else>
                    <option :value=null selected disabled>Select Unit</option>
                    <option v-if="selectedType === 'length'" v-for="unitType in unitTypes.length" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'temperature'" v-for="unitType in unitTypes.temperature" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'area'" v-for="unitType in unitTypes.area" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'volume'" v-for="unitType in unitTypes.volume" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'weight'" v-for="unitType in unitTypes.weight" :value="unitType" class="capitalize">{{ unitType }}</option>
                    <option v-if="selectedType === 'data'" v-for="unitType in unitTypes.data" :value="unitType" class="capitalize">{{ unitType }}</option>
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
                //Types
                measurementTypes: [
                    'length', 
                    'temperature', 
                    'area', 
                    'volume', 
                    'weight',
                    'data'
                ],
                selectedType: null,

                unitTypes: {
                    length:['kilometer', 'meter', 'centimeter', 'millimeter', 'micrometer', 'mile', 'yard', 'foot', 'inch'],
                    temperature:['fahrenheit', 'celsius', 'kelvin'],
                    area:['square kilometer', 'square meter', 'square centimeter', 'square millimeter', 'square micrometer', 'hectare', 'square mile', 'square yard', 'square foot', 'square inch', 'acre', ],
                    volume:['cubic kilometer', 'cubic meter',  'cubic centimeter', 'cubic millimeter', 'cubic mile', 'cubic yard', 'cubic foot', 'cubic inch', 'liter', 'milliliter', 'us gallon', 'us quart', 'us pint', 'us fluid ounce', 'us table spoon', 'us tea spoon'],
                    weight:['kilogram', 'gram', 'milligram', 'metric ton', 'long ton', 'short ton', 'pound', 'ounce', 'carat'],
                    data:['bit', 'byte', 'kilobit', 'kilobyte', 'megabit', 'megabyte', 'gigabit', 'gigabyte', 'terabit', 'terabyte', 'petabit', 'petabyte', 'exabit', 'exabyte']
                },
                leftSelectedUnit:null,
                rightSelectedUnit:null,

                //Conversion


                leftScreen: 0,
                rightScreen: 0,
            }
        },
        methods: {
            
        }
    }
</script>