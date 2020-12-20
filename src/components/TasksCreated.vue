<template>
    <div>
        <div class="d-flex justify-content-between">
            <vs-tooltip right>
                <button class="bottonDeleteGroup buttonFocus" v-if="groupSelect.length != 0" data-toggle="modal" data-target=".deleteGroup">
                    <span class="iconify" data-icon="wpf:delete" data-inline="false"></span>    
                </button>
                <div v-else>
                    <vs-alert class="alert">
                    Para eliminar tareas en grupo, puede seleccionarlas y luego dar click en el icono de eliminar que aparecerá
                    </vs-alert>                
                </div>
                <template #tooltip>
                    Eliminar en grupo
                </template>
            </vs-tooltip>
            <FilterTask v-on:infoFilter="setFilter" class="d-flex justify-content-end w-100"/>
        </div>
        
        <Welcome v-if="info.length == false"/>
        <div v-else class="contCard d-flex">
            <vs-card class="col-xl-3 col-lg-3 col-sm-4 contUnit" v-for="(item, index) in filteredPacks" :key="index" :class="{'colorSelect' : item.selected}" @click="group(item)">
                <template #title>
                    <h3>{{item.title}}</h3>
                </template>
                <template #img>
                    <div  :class="'A'+ item.random" class="size"></div>
                </template>
                <template #text>
                    <div class="d-flex flex-column justify-content-between h-100">
                        <p>
                            {{item.description}}
                        </p>
                        <p class="time" id="fav">
                            Creaado el: {{item.date}}<br> a las {{item.time}}hrs
                        </p>
                    </div>
                </template>
                
                <template #interactions>
                    <vs-tooltip left>
                        <vs-button danger icon class="buttonFocus" :class="{'colorButtonHeart' : item.fav}" @click="addFav(item)" >
                            <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
                        </vs-button>
                        <template #tooltip>
                            Agregar a favoritos
                        </template>
                    </vs-tooltip>
                    <vs-tooltip top>
                        <vs-button class="btn-chat buttonFocus" shadow primary :class="{'colorButtonCheck' : item.check}" @click="addCheck(item)">
                            <span class="iconify" data-icon="fa-solid:check-circle" data-inline="false"></span>
                        </vs-button>
                        <template #tooltip>
                            Marcar como finalizado
                        </template>
                    </vs-tooltip>
                    <vs-tooltip bottom>
                        <vs-button class="btn-chat buttonFocus" shadow primary data-toggle="modal" data-target=".edit"  @click="editModal(item)">
                            <span class="iconify" data-icon="bx:bxs-edit-alt" data-inline="false"></span>
                        </vs-button>
                        <template #tooltip>
                           Editar
                        </template>
                    </vs-tooltip>
                    <vs-tooltip right>
                        <vs-button class="btn-chat buttonFocus" shadow primary data-toggle="modal" data-target=".bd-example-modal-sm" @click="deleteTask(item)">
                            <span class="iconify" data-icon="wpf:delete" data-inline="false"></span>
                        </vs-button>
                        <template #tooltip>
                            Eliminar
                        </template>
                    </vs-tooltip>
                </template>
            </vs-card>
        </div>
            
            <DeleteModal :indexD="index"/>
            <DeleteGroup :groupDeleted="groupSelect"/>
            <EditModal :item="item" :index="index"/>
        </div>
</template>
<script>
import { mapState } from 'vuex'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import DeleteGroup from '@/components/modal/DeleteGroup.vue'
import EditModal from '@/components/modal/EditModal.vue'
import FilterTask from '@/components/FilterTask.vue'
import Welcome from '@/components/Welcome.vue'
export default {
    name:'TasksCreated',
    components:{
        DeleteModal,
        EditModal,
        FilterTask,
        Welcome,
        DeleteGroup
    },
    data: () => ({
        index:0,
        item:{},
        valueClass:false,
        favorite:[],
        groupSelect:[],
        goBack: false,
        contFilter:''
    }),
    computed: {
        ...mapState(['info']),
        filteredPacks(){
            return this.info.filter((el) => {
                return el.date.toLowerCase().match(this.contFilter);
            })
        }
    },
    methods: {
        deleteTask(item){
            item.selected = !item.selected
            this.index = this.info.indexOf( item );
        },
        editModal(item){
            item.selected = !item.selected
            this.item = item
            this.index = this.info.indexOf( item );
            this.$store.commit('indexModal', this.index)
        },
        setFilter(infoFilter){
           this.contFilter = infoFilter
        },
        addFav(item){
                item.selected = !item.selected 
                item.fav = !item.fav

                var indexU = this.info.indexOf( item )
                this.info[indexU] = item
                localStorage.setItem('info', JSON.stringify(this.info))

                var favoriteLocal = localStorage.getItem('favoritesTask')
                this.favorite = JSON.parse(favoriteLocal)

                    if(item.fav == true){
                        this.favorite.push( item )
                        localStorage.setItem('favoritesTask', JSON.stringify(this.favorite))
                        this.$store.commit('favoritesTask')

                    } else {
                        var found = this.favorite.find(element => element.id == item.id);
                        var indexD = this.favorite.indexOf( found )

                        if ( indexD !== -1 ) {
                            this.favorite.splice(indexD, 1)
                            localStorage.setItem('favoritesTask', JSON.stringify(this.favorite))
                            this.$store.commit('favoritesTask')

                        }
                    }
                
        },
        addCheck(item){
            item.check = !item.check
            item.selected = !item.selected 
            if(item.check){
                    const noti = this.$vs.notification({
                        position:'top-right',
                        color: 'success',
                        title: 'Felicidades!',
                        text: `Has concluido uno de tus pendientes, estamos orgullosos 👍`
                    })
            }
        },
        group(item){
            item.selected = !item.selected 
            if(item.selected){
                this.groupSelect.push(
                    item
                ) 
            } else  {
                var index = this.groupSelect.indexOf( item )
                if ( index !== -1 ) {
                    this.groupSelect.splice(index, 1)
                }
            }
        }
              
    },
    created() {
        
        localStorage.setItem('info', JSON.stringify(this.info))
        this.$store.commit('createTask');
    },
}
</script>
<style>

    .contCard{
        overflow: auto;
        height: 60vh;
        margin-top:1rem;
        flex-wrap: wrap;
        width: 100%;
    }
    .contUnit{
        margin-bottom: 3rem;
        min-width: 15rem;
    }
    
    .size{
        height: 10vw;
        width: 100%;
    }
    .time{
        font-size: 11.5px!important;
        color: #c3c2c2;
        font-family: 'GalanoGrotesque';
        text-align: end;
    }
    .bottonDeleteGroup{
        background: #e7e7e7;
        border:none;
        border-radius: 1rem;
        padding: 0.5rem 1rem;
    }
    .vs-card{
        height: 80%;
    }
    .vs-card__text{
        height: 20%;
    }
    .colorSelect .vs-card{
        background-color: #e7e7e7;
        box-shadow: 1px 1px 15px -8px rgb(0 0 0 / 89%);
        height: 100%;
    }
    .colorButtonHeart{
        background-color:#fff!important;
        color:#ff4757!important;
    }
    .colorButtonCheck{
        background-color: #166616!important;
        color: #ffffff!important;
    }
    .modal-sm{
        max-width:400px;
    }

    @media (max-width: 979px) {
        .contCard{
            margin-top:2rem;
            flex-wrap: wrap;
            height: 100%;
        }
    }






    .A0 {
        background: linear-gradient(-45deg, #203863, #415A88, #416888, #417888, #554D79, #223372);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }
    .A1 {
        background: linear-gradient(75deg, #0D3A7C, #3F8DFF, #653FFF, #3200FF, #1A2675, #0077B7);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A2 {
        background: linear-gradient(45deg, #003A93, #053173, #1F214B, #132C52, #385C95, #2765C7);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A3 {
        background: linear-gradient(-45deg, #203863, #415A88, #416888, #417888, #554D79, #223372);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A4 {
        background: linear-gradient(45deg, #0043AD, #493876, #384176, #2D3E9D, #2412BB, #005993);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A5 {
        background: linear-gradient(-45deg, #2681CC, #2653CC, #113186, #007CFF, #001A61, #0043AD);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A6 {
        background: linear-gradient(45deg, #445E7C, #304583, #22419D, #255172, #625193, #515E93);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A7 {
        background: linear-gradient(-45deg, #263E68, #50668C, #314483, #6B5492, #546992, #597590);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A8 {
        background: linear-gradient(-45deg, #072C4F, #073A4F, #07184F, #0F074F, #22074F, #243156);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A9 {
        background: linear-gradient(-45deg, #68A6D1, #6890D1, #6878D1, #7668D1, #2F7AD8, #6789B4);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    .A10 {
        background: linear-gradient(45deg, #445E7C, #304583, #22419D, #255172, #625193, #515E93);
        background-size: 600% 100% !important;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
    }

    @keyframes gradient {
        0% {
            background-position: 0%;
        }

        100% {
            background-position: 100%;
        }
    }
</style>