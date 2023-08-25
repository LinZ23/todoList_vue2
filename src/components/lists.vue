<template>
  <div>
    <transition-group name="lists">
      <thing
        v-for="i in todos"
        :i="i"
        :key="i.id"
        :isDone="isDone"
        :delThing="delThing"
      >
      </thing>
    </transition-group>
  </div>
</template>

<script>
import thing from "./thing.vue";
export default {
  data() {
    return {
      things: [],
    };
  },
  components: {
    thing,
  },
  props: ["todos", "isDone", "delThing"],
};
</script>

<style scoped>
.lists-enter-active {
  animation: addAndDel .3s linear;
}
.lists-leave-active {
  animation: addAndDel .3s linear reverse;
}
@keyframes addAndDel {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>