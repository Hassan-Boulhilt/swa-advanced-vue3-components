<template>
    
    <p>The user is {{ age }} years old</p>
    <button type="button" @click="onclikAge">Update The Age</button>
    <p >{{ageDoubled}}</p>

    
</template>

<script>
    export default {
        name:'user',
        props: ["age"],
        emits: ['age-change'],

        computed:{
            ageDoubled() {
                return  this.age * 2       
            }
        },

        methods:{
            onclikAge() {
                this.$emit('age-change', 3)
                
            }

        },      
    }
</script>

