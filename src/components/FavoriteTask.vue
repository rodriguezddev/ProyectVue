<template>
     <div class="contCard row ml-3 mr-3">
            <vs-card class="col-xl-3 col-lg-3 col-sm-2 contUnit" v-for="(item, index) in favorite" :key="index">
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
                    <vs-button danger icon class="buttonFocus" :class="{'colorButtonHeart' : item.fav}" @click="DeleteOfFav(item)" >
                        <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
                    </vs-button>
                    <vs-button class="btn-chat buttonFocus" shadow primary :class="{'colorButtonCheck' : item.check}" @click="addCheck(item)">
                        <span class="iconify" data-icon="fa-solid:check-circle" data-inline="false"></span>
                    </vs-button>
                    <vs-button class="btn-chat buttonFocus" shadow primary data-toggle="modal" data-target=".edit"  @click="editModal(item)">
                        <span class="iconify" data-icon="bx:bxs-edit-alt" data-inline="false"></span>
                    </vs-button>
                    <vs-button class="btn-chat buttonFocus" shadow primary data-toggle="modal" data-target=".bd-example-modal-sm" @click="deleteTask(item)">
                        <span class="iconify" data-icon="wpf:delete" data-inline="false"></span>
                    </vs-button>
                </template>
            </vs-card>
        </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'FavoriteTask',
    computed: {
        ...mapState(['favorite', 'info'])
    },
    methods: {
           DeleteOfFav(item){
            item.fav = !item.fav
            item.selected = !item.selected 
               
                var found = this.favorite.find(element => element.id == item.id);
                var indexU = this.favorite.indexOf( found )
                this.info[indexU] = item
                localStorage.setItem('info', JSON.stringify(this.info))

            if(item.fav == true){
                this.favorite.push(
                    item
                )
            } else {
                var index = this.favorite.indexOf( item )
                if ( index !== -1 ) {
                    this.favorite.splice(index, 1)
                }
            }
            localStorage.setItem('favoritesTask', JSON.stringify(this.favorite))

                this.$store.commit('favoritesTask')
                this.$store.commit('createTask');
        },
    },
}
</script>