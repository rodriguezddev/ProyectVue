<template>
    <div class="modal fade deleteGroup" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content border-0">
                <div class="modal-header border-0 justify-content-center">
                    <h5 class="modal-title titleModal text-center">Seguro de eliminar estas tareas? </h5>
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
                            @click="deleteGroupTask()"
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
import { mapState } from 'vuex'
export default {
    name:'DeleteGroup',
    props:{
        groupDeleted:[Array, String, Number]
    },
    methods: {
        deleteGroupTask(){
            var infoLocal = localStorage.getItem('info')
            var info = JSON.parse(infoLocal)

            for (let i = 0; i < info.length; i++) {
                for (let j = 0; j <  this.groupDeleted.length; j++) {
                        var found = info.find(element => element.id == this.groupDeleted[j].id);
                        var index = info.indexOf(found)
                         if ( index !== -1 ) {
                            info.splice(index, 1)
                            localStorage.setItem('info',JSON.stringify(info))
                        }
                    }
            }
            this.$store.commit('createTask');
        }
    },
}
</script>