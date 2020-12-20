<template>
  <div class="about ml-5 mr-5">
    <FavoriteTask/>
  </div>
</template>
<script>
import FavoriteTask from '@/components/FavoriteTask.vue'
export default {
  name:'Favorites',
  components:{
    FavoriteTask
  }
}
</script>