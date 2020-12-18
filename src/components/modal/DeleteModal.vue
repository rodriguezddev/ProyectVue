<template>
    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content border-0">
                <div class="modal-header border-0 justify-content-center">
                    <h5 class="modal-title titleModal text-center">Quieres eliminar esta tarea? </h5>
                </div>
                <div class="modal-footer border-0 justify-content-around">
                     <button
                        class="button buttonU buttonFocus"
                        data-dismiss="modal"
                        >
                        Cancelar
                    </button>
                    <button
                            class="button buttonD buttonFocus"
                            @click="deleteTaks()"
                            data-dismiss="modal"
                        >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DeleteModal',
    props:{
        indexD: Number
    },
    data:() => ({
        active: 0,
    }),
    
    methods: {
        deleteTaks(){
            this.$store.commit('deletedTask', this.indexD);
            
        }
    },
}
</script>
<style>
    .titleModal{
        font-family: 'GalanoGrotesque';
    }
</style>