<template>
  <div class="home row">
    <Create class="col-3"/>
    <Welcome v-if="info.length == false" class="col" />
    <TasksCreated v-else class="col" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Create from '@/components/Create.vue'
import TasksCreated from '@/components/TasksCreated.vue'
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'Home',
  components: {
    Create,
    TasksCreated,
    Welcome
  },
  computed: {
        ...mapState(['info'])
    }
}
</script>

<style>
  
</style>