<template>
  <div>
    <div class="footer pb-5">
      <div class="container mx-auto">
        <div class="row pt-5">
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <NuxtLink class="" to="/">
                <img src="~/assets/images/frontend/general/logo.png" alt="Logo">
              </NuxtLink>
              <h6 class="fw-semibold my-3 pe-4">The only way to do great work is to love what you do</h6>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <h4 class="fw-bold text-brand mt-3">Company</h4>
              <NuxtLink to="/careers" class="text-dark py-1 d-block">Careers</NuxtLink>
              <NuxtLink to="/about-us" class="text-dark py-1 d-block">About Us</NuxtLink>
              <NuxtLink to="/jobs" class="text-dark py-1 d-block">Listed Jobs</NuxtLink>
              <NuxtLink to="/job-category" class="text-dark py-1 d-block">Job Categories</NuxtLink>
              <NuxtLink to="/careers" class="text-dark py-1 d-block">Career</NuxtLink>
              <NuxtLink to="/community-guidelines" class="text-dark py-1 d-block">Community Guideline</NuxtLink>
              <NuxtLink to="/insurance-policy" class="text-dark py-1 d-block">Insurance Policy</NuxtLink>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <h4 class="fw-bold text-brand mt-3">Customer</h4>
              <NuxtLink to="/user" class="text-dark py-1 d-block">Profile</NuxtLink>
              <NuxtLink to="/profile" class="text-dark py-1 d-block">Update Profile</NuxtLink>
              <NuxtLink to="/settings/account" class="text-dark py-1 d-block">Profile Settings</NuxtLink>
              <NuxtLink to="/create-listing" class="text-dark py-1 d-block">Create Listing</NuxtLink>
              <NuxtLink to="/list-my-services" class="text-dark py-1 d-block">List Your Services</NuxtLink>
              <NuxtLink to="/listing" class="text-dark py-1 d-block">Listed Services</NuxtLink>
              <NuxtLink to="/my-tasks" class="text-dark py-1 d-block">Listed Tasks</NuxtLink>
              <NuxtLink to="/listing/listing-view" class="text-dark py-1 d-block">View List</NuxtLink>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <h4 class="fw-bold text-brand mt-3">Find Us</h4>
              <div class="mt-3">
                <p class="text-16">Download the HiTask App and get the tasks you need completed with just a tap of the button. You can also browse available tasks and earn money wherever you go!</p>
                <a href="#" target="_blank"><img class="img-fluid me-2" src="~/assets/images/frontend/earn-money-as-tasker/app-store.svg" alt=""></a>
                  <a href="#" target="_blank"><img class="img-fluid mt-lg-0 mt-sm-2 mt-0" src="~/assets/images/frontend/earn-money-as-tasker/google-play.svg" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-brand text-white text-center py-3">
      <p class="text-15 mb-0">Copyright © {{ new Date().getFullYear() }} HiTasks. All rights reserved.</p>
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
  background-color: #c8a2e680;
}
</style>