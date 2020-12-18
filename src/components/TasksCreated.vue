<template>
    <div class="contCard row">
            <vs-card class="col-xl-3 col-lg-3 col-sm-2 contUnit" v-for="(item, index) in info" :key="index">
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
                        <p class="time">
                            Creaado el: {{item.date}}<br> a las {{item.time}}hrs
                        </p>
                    </div>
                </template>
                
                <template #interactions>
                    <vs-button danger icon class="buttonFocus">
                        <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
                    </vs-button>
                    <vs-button class="btn-chat buttonFocus" shadow primary data-toggle="modal" data-target=".edit"  @click="editModal(item)">
                        <span class="iconify" data-icon="bx:bxs-edit-alt" data-inline="false"></span>
                    </vs-button>
                    <vs-button class="btn-chat buttonFocus" shadow primary data-toggle="modal" data-target=".bd-example-modal-sm" @click="deleteTask(item)">
                        <span class="iconify" data-icon="wpf:delete" data-inline="false"></span>
                    </vs-button>
                </template>
            </vs-card>
            <DeleteModal :indexD="index"/>
            <EditModal :item="item" :index="index"/>
        </div>
</template>
<script>
import { mapState } from 'vuex'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import EditModal from '@/components/modal/EditModal.vue'
export default {
    name:'TasksCreated',
    components:{
        DeleteModal,
        EditModal
    },
    data: () => ({
        index:0,
        item:{}
    }),
    computed: {
        ...mapState(['info'])
    },
    methods: {
        deleteTask(item){
            this.index = this.info.indexOf( item );
        },
        editModal(item){
            this.item = item
            this.index = this.info.indexOf( item );
            this.$store.commit('IndexModal', this.index)
            console.log(this.index)
        }
                
    },
}
</script>
<style>
    .contCard{
        padding: 0 1rem 0 0 ;
        overflow: auto;
        height: 70vh;
    }
    .contUnit{
        
        margin-bottom: 3rem;
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
    .vs-card{
        height: 100%;
    }
    .vs-card__text{
        height: 20%;
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