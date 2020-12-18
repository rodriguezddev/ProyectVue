<template>
    <div class="modal fade edit" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content border-0">
                <div class="modal-header border-0 justify-content-center">
                    <h5 class="modal-title titleModal text-center">Edita tus tareas </h5>
                </div>
                 <div class="modal-body">
                     <div class="box">
                        <label> Elige un titulo</label>
                        <input v-model="item.title" class="input" placeholder="Ejem: Hacer las compras" type="text">
                    </div>
                    
                    <div class="box">
                        <label>Agrega una descripcion</label>
                        <textarea v-model="item.description" class="feedback-input" cols="30" rows="5"></textarea>
                    </div>
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
                        data-dismiss="modal"
                        @click="editTask()"
                        >
                        Guaradar cambios
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'editModal',
    props:{
        index: Number,
        item:{
            type:Object,
            required:true
        }
    },
    data: () => ({
        date:'',
        time:'',
        random:0,
        newInfo:{
            title: '',
            description: '',
            random: '',
            date:'',
            time:''
        }
    }),
        computed: {
        ...mapState(['info'])
    },

    methods: {
        editTask(){
            var today = new Date();
            this.date = today.getDate() +'/'+(today.getMonth() + 1)+'/'+today.getFullYear();
            this.time = today.getHours()+':'+today.getMinutes()
            this.random = Math.round(Math.random() * 10) 

            this.newInfo.description = this.item.description
            this.newInfo.title = this.item.title
            this.newInfo.random = this.random
            this.newInfo.date = this.date
            this.newInfo.time = this.time
            
            this.$store.commit('EditTask', this.newInfo)
            
            console.log(this.info)
        }
    },
}
</script>