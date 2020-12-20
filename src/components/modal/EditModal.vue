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
                        <input v-model="titleEdit" class="input" @input="buttonDisabled()" placeholder="Ejem: Hacer las compras" type="text">
                    </div>
                    
                    <div class="box">
                        <label>Agrega una descripcion</label>
                        <textarea v-model="descriptionEdit" class="feedback-input"  @input="buttonDisabled()" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div class="modal-footer border-0 justify-content-end">
                     <button
                        class="button buttonU buttonFocus ml-3"
                        data-dismiss="modal"
                        @click="clearEdit()"
                        >
                        Cancelar
                    </button>
                    <button
                        class="button buttonD buttonFocus"
                        data-dismiss="modal"
                        @click="editTask()"
                        :disabled="isDisabled"
                        >
                        Guaradar
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
        descriptionEdit:'',
        titleEdit:'',
        objEdit:{},
        isDisabled:true
        
    }),
        computed: {
        ...mapState(['info'])
    },
    methods: {
        editTask(){
            var infoLocal = localStorage.getItem('info')
            this.info = JSON.parse(infoLocal)
            if(this.titleEdit != '' && this.descriptionEdit != ''){
                 var today = new Date();
                this.date = today.getDate() +'/'+(today.getMonth() + 1)+'/'+today.getFullYear();
                this.time = today.getHours()+':'+today.getMinutes() 
                    this.objEdit = {
                    description: this.descriptionEdit,
                    title:this.titleEdit,
                    date: this.date,
                    time:this.time,
                    random:this.item.random,
                    selected:this.item.selected,
                    id:this.item.id,
                    fav:this.item.fav,
                    check:this.item.check
                }
                var index = this.info.indexOf( this.item )
                this.info[index] = this.objEdit
                localStorage.setItem('info',JSON.stringify(this.info))
                this.$store.commit('createTask');
                this.descriptionEdit = ''
                this.titleEdit = ''
                this.notificationEditCheck()
            }else {
                this.notificationEditFail()
            }
           
        },
        notificationEditCheck(){
                const noti = this.$vs.notification({
                        position:'top-right',
                        color: 'success',
                        title: 'Enhorabuena!',
                        text: `Tu tarea se ha editado con éxito 👍`
                    })
            },
        notificationEditFail(){
                const noti = this.$vs.notification({
                        position:'bottom-right',
                        color: 'danger',
                        title: 'Oh no!',
                        text: `No puedes guardar una tarea vacia 😢`
                    })
        },
        buttonDisabled(){
            if(this.titleEdit != '' && this.descriptionEdit != ''){
                this.isDisabled = false
            } else {
                 this.isDisabled = true
            }
        },
        clearEdit(){
            this.descriptionEdit = ''
            this.titleEdit = ''
        }

    }
    
}
</script>