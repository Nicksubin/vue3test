<template>
    <HeaderView></HeaderView>
    <router-view></router-view>
</template>


<script>
import {defineComponent} from "vue";
import HeaderView from "@/assets/common/Header.vue";

export default defineComponent({
  components: {HeaderView}
})
</script>