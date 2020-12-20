<template>
  <div class="home">
        <Create class="contUno"/>
        <TasksCreated  class="contDos" />
  </div>
</template>

<script>
import Create from '@/components/Create.vue'
import TasksCreated from '@/components/TasksCreated.vue'


export default {
  name: 'Home',
  components: {
    Create,
    TasksCreated,
  }
}
</script>
<style>
  .home{
    margin-top: -2rem;
  }
  .vs-alert__content__text{
    padding: 0;
  }
  .vs-alert__content{
    display: flex;
    align-items: center;
  }
  @media (min-width: 980px) {
    .home {
      display: flex;
      justify-content: space-between;
    }
    .contUno{
      flex-basis: calc(20% - 1rem)
    }
    .contDos{
      flex-basis: calc(80% - 1rem);
      margin-top: 2rem;
    }
  }
   @media (max-width: 979px) {
      .home{
         margin: 0 2rem;
      }
   }

</style>