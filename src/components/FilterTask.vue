<template>
    <div class="contSearch">
        <input class="search" v-model="infoFilter" type="text" placeholder="Filtrar por dd/mm/aaaa" @input="sendFilter()">
        <button class="buttonFilter buttonFocus" >
            <span class="iconify magnifying-glass"  data-icon="oi:magnifying-glass" data-inline="false"></span>
        </button>
    </div>
</template>
<script>
export default { 
    name:'FilterTask',
    data:() => ({
        infoFilter:''
    }),
    methods: {
        sendFilter(){
            console.log(this.infoFilter)
            this.$emit('infoFilter', this.infoFilter)
            
        }
    },
}
</script>
<style>
    .contSearch{
        margin-right: 2rem;
    }
    .search{
        border: none;
        border-bottom: solid 1px #c7c6c6;
    }
    .buttonFilter{
        margin: 0 0 0.5rem -1.5rem;
        background:transparent;
        border:none;
    }
    .magnifying-glass{
        font-size: 16px;  
        color:#7e7e7e;
    }
</style>