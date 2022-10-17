<template>
  <div>-----</div>
</template>

<script setup>
// 不存在这个商品则提示404商品没找到
import { changeHeaderStyleSystem } from "@/stores/counter";
changeHeaderStyleSystem.whiteAnBlackSystem();
</script>

<style lang="scss" scoped>

</style>
