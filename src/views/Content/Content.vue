<template>
  <!-- 网站简介 -->
  <Banner></Banner>
  <!-- 主体内容 -->
  <!-- <article> -->
  <!-- <div class="article-info"> -->
  <div class="container">
    <div class="article-center">
      <el-row>
        <el-col :span="12">
          <el-row>
            <h4>新的用户界面标准</h4>
          </el-row>
          <el-row>
            <div>可以在运行时操作的超小型、高质量、交互式动画文件格式。</div>
          </el-row>
          <el-row><div>学到更多-></div></el-row>
        </el-col>
        <el-col :span="6"> 123</el-col>
        <el-col :span="6">123 </el-col>
      </el-row>
    </div>
    <!-- </div> -->
  </div>
  <!-- 数据展示 -->
  <Products></Products>
</template>

<script lang="ts" setup>
import Banner from "./Banner.vue";
import Products from "@/views/Products/Products.vue";
</script>

<style scoped lang="scss">
.article-info {
  // position: absolute;
  border-radius: 50px;
  // display: flex;
  // width: 69%;
  // height: 200px;
}
.article-center {
  background: #fff;
  height: 130px;
  border-radius: 20px;
  z-index: 100;
  box-shadow: 0 0 24px 1px rgb(0 0 0 / 8%);
  padding: 2rem;
  h4 {
    color: #000;
    font-size: 28px;
    line-height: 44px;
    font-weight: 400;
    margin: 0px 0px 8px;
  }
}
</style>
