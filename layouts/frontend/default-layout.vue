<template>
  <div>
    <FrontendIncludesPrimaryNavbar />
    <div class="top-padding"></div>
    <nuxt />
    <FrontendIncludesFooter />
  </div>
</template>

<script>

export default {

}
</script>

<style>
.top-padding{
  padding-top: 62px;
}
a.nuxt-link-exact-active {
  color: var(--brandColor) !important;
  font-weight: bold !important;
}
@media(max-width:991px){
  .top-padding{
  padding-top: 75px;
}
}
</style>
