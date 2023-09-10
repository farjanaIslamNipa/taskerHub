<template>
  <div>
    <div class="bg-purple-light footer">
      <div class="container mx-auto">
        <div class="row pt-5">
          <div class="col-md-3">
            <NuxtLink to="/careers" class="text-white py-1 d-block">Careers</NuxtLink>
            <NuxtLink to="/about-us" class="text-white py-1 d-block">About Us</NuxtLink>
            <NuxtLink to="/jobs" class="text-white py-1 d-block">Jobs</NuxtLink>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="bg-brand text-white text-center py-3">
      <p class="text-15 mb-0">Copyright © 2022 HiTasks. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'FooterSection'
  }
</script>

<style scoped>
.footer{
  height: 300px;
}
</style>