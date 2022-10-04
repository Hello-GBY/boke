<template>
  <header class="blog-header">
    <nav id="nav" class="navbar">
      <div class="container header-center">
        <a class="navbar-brand" href="/"> logo </a>
        <div class="collapse" id="navbarCollapse">
          <ul id="navbar" class="navbar-nav">
            <li class="nav-item">导航一</li>
            <li class="nav-item">导航二</li>
            <li class="nav-item">导航二</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.blog-header {
  #nav {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    height: 100%;
    &.navbar {
      padding-top: 1rem;
      padding-bottom: 1rem;
      background: var(--lighting);
      padding-right: 0px;
      padding-left: 0px;
    }
    .header-center {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: nowrap;
      max-width: 980px;
    }
  }
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  margin: 0 10px;
}
.navbar-nav {
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding-left: 0;
  margin-bottom: 0;
  flex-direction: row;
}

#navbarCollapse {
  flex-grow: 1;
  .nav-item {
    margin: 10px 20px;
    text-align: right;
  }
}
</style>
