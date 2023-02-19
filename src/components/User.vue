<template>
    
    <p>The user is {{ age }} years old</p>
    <button type="button" @click="onclikAge">Update The Age event</button>
    <button type="button" @click="ageChangefn(3)">Update The Age CB</button>
    <p >{{ageDoubled}}</p>

    
</template>

<script>
    export default {
        name:'user',
        props: {
            age:{
                type: Number, 
                // required: true,   
                // default: 20  
                validator(value) {
                    return value < 130
                }        
            },
            ageChangefn : Function
        },
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

