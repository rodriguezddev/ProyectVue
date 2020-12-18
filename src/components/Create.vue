<template>
    <div class="create">
        <div class="box">
            <label> Elige un titulo</label>
            <input v-model="title" class="input" placeholder="Ejem: Hacer las compras" type="text">
        </div>
        
        <div class="box">
            <label>Agrega una descripcion</label>
            <textarea v-model="description" class="feedback-input" cols="30" rows="5"></textarea>
        </div>
        <div class="contButtons">
            <button
                @click=" Clear() "
                class="button buttonU buttonFocus"
            >
            Limpiar
            </button>
            <button
                @click="ColorVuesax()"
                class="button buttonD buttonFocus"
            >
            Guardar
            </button>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    name:'Create',
     data:() => ({
        active: 0,
        title:'',
        description:'',
        date:'',
        time:'',
        random:0,
        info:[]
      }),
      methods: {
            ColorVuesax(){
                var today = new Date();
                this.date = today.getDate() +'/'+(today.getMonth() + 1)+'/'+today.getFullYear();
                this.time = today.getHours()+':'+today.getMinutes()
                this.random = Math.round(Math.random() * 10) 
                
                 if(this.title != '' && this.description != ''){
                        this.info.push({
                        title: this.title,
                        description: this.description,
                        random: this.random,
                        date:this.date,
                        time:this.time
                    })
                        this.$store.commit('createTask', this.info);
                        this.notificationCheck()
                } else {
                   
                    this.notificationFail()
                }
                

                this.title = ''
                this.description = ''

                
            },
            notificationCheck(){
                const noti = this.$vs.notification({
                        position:'top-right',
                        color: 'success',
                        title: 'Enhorabuena!',
                        text: `Tu tarea se ha creado con éxito 👍`
                    })
            },
            notificationFail(){
                const noti = this.$vs.notification({
                        position:'bottom-right',
                        color: 'danger',
                        title: 'Oh no!',
                        text: `No puedes guardar una tarea vacia 😢`
                    })
            },
          Clear(){
              this.title = ''
              this.description = ''
              this.active = 1 
          }
      },
}
</script>

<style>
    label {
        font-size: 0.8rem;
    }
    .create {
        padding: 2rem 1rem;
        border: solid 1px #8e8b8b;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .box {
        display:flex;
        flex-direction: column;
    }
    .box:last-of-type{
        margin-top: 1rem;
    }
    .input {
        border: none;
        padding: 0.5rem;
        border-radius: 0.8rem;
        background: #f3f2f2;
    }
    .feedback-input {
        border: none;
        border-radius: 0.8rem;
        background: #f3f2f2;
        padding: 13px;
    }
    .feedback-input:focus {
        box-shadow: 0;
        border: 3px solid #FFF;
        color: #000;
        outline: none;
    }
    .contButtons{
        display:flex;
        justify-content: space-around;
        margin-top:1rem;
    }
    .button{
        padding: 0.1rem 0.4rem !important;
    }
   
    .buttonU{
        border: solid #93b8e8 1px;
        color: #93b8e8;
        border-radius: 0.5rem;
        width: 6vw;
        height: 3vw;
    }
    .buttonD {
        background: linear-gradient(75deg, #3F8DFF, #653FFF);
        border: none;
        color: #fff;
        width: 6vw;
        height: 3vw;
        border-radius: 0.5rem;
    }
</style>