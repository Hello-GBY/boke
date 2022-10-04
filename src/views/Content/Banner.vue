<template>
  <div id="banner">
    <div class="container">
      <el-row>
        <el-col :span="13">
          <h1>高级的ThingJS市场</h1>
          <p class="describe">
            为忙碌的初创公司所有者、设计师和开发人员提供高质量的ThingJs代码
          </p>
          <p class="describe">=========</p>
        </el-col>
        <el-col :span="11">
          <div class="banner-animation">这里是动图</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
#banner {
  margin-top: -90px;
  padding-top: 90px;
  padding-bottom: 117px;
  margin-bottom: -90px;
  background: var(--lighting);
  .row.banner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  h1 {
    font-size: 60px;
    line-height: 72px;
    margin-top: 7rem;
    margin-bottom: 0px;
  }
  .describe {
    font-size: 24px;
    line-height: 36px;
    cursor: default;
    color: #858d97;
    font-family: "PT Serif", serif;
  }
  .banner-animation {
    background: #caeaee;
    width: 100%;
    height: calc(100% - 45px);
    margin: 45px 0px;
    text-align: center;
  }
}
</style>
