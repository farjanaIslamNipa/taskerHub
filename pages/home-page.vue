<template>
    <div>
      <FrontendHomeHeaderSection />
      <FrontendHomePostFirstTaskSection />
      <!-- WHATS OTHERS GETTING DONE SECTION -->
      <div class="others-getting-done-banner pt-xxl-5 pt-0 pb-5">
        <div class="container">
          <h1 class="text-center text-brand">See what others are getting done</h1>
          <div class="d-flex align-items-center flex-wrap justify-content-center pt-4 pb-sm-5 pb-3">
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="/">Moving in</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Home maintenance</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Starting a business</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Parties</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Something different</NuxtLink>
          </div>
          <div class="pt-xl-4 pt-0">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <FrontendHomeTaskCard />
              </div>
            </div>
          </div>
          <div class="text-center mt-sm-5 mt-4">
            <NuxtLink class="rounded-fill-btn get-started-btn button-small" :to="{name: 'post-task'}">Get started now for free</NuxtLink>
          </div>
        </div>
      </div>
      <!-- <FrontendHomeOthersGettingDoneSection /> -->
      <!-- FEEL SAFE AND SECURE SECTION -->
      <div class="py-5">
        <div class="container">
          <h1 class="text-center text-brand py-3">Feel safe and secure on HiTasks</h1>
          <div class="py-xl-5 py-3">
            <div class="safe-secure-bg">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-12 mb-lg-0 mb-4">
                  <div class="bg-white py-5 px-4 text-center card-shadow safe-secure-card-top-margin">
                    <img data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" src="~/assets/images/frontend/home/secure-payment.svg" alt="">
                    <h5 class="text-brand text-capitalize fw-bold mt-3">secured payments</h5>
                    <p class="pb-xxl-2 pb-lg-5 pb-2">Only release payment when the task is completed to your satisfaction</p>
                    <NuxtLink class="learn-more-btn text-brand bg-purple-lighter rounded py-2 px-4 fw-bold" to="#">Learn More</NuxtLink>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-lg-0 mb-4">
                  <div class="bg-white py-5 px-4 text-center card-shadow">
                    <img data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" src="~/assets/images/frontend/home/trusted-rating-review.svg" alt="">
                    <h5 class="text-brand text-capitalize fw-bold mt-3">Trusted ratings and reviews</h5>
                    <p class="pb-2">Pick the right person for the task based on real ratings and reviews from other users</p>
                    <NuxtLink class="learn-more-btn text-brand bg-purple-lighter rounded py-2 px-4 fw-bold" to="#">Find out more</NuxtLink>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="bg-white py-5 px-4 text-center card-shadow safe-secure-card-top-margin">
                    <img data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" src="~/assets/images/frontend/home/peace-of-mind.svg" alt="">
                    <h5 class="text-brand text-capitalize fw-bold mt-3">Insurance for peace of mind</h5>
                    <p class="pb-2">We provide liability insurance for Taskers performing most task activities</p>
                    <NuxtLink class="learn-more-btn text-brand bg-purple-lighter rounded py-2 px-4 fw-bold" to="#">See details</NuxtLink>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5 d-sm-block d-none">
                <NuxtLink class="rounded-fill-btn" :to="{name: 'post-task'}">Get started now for free</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-top-padding position-relative">
        <div class="purple-gradient-bg">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-4 pe-0">
                <div class="home-mobile-img d-lg-block d-none">
                  <img data-aos="fade-down" data-aos-delay="50" data-aos-duration="800" class="img-fluid" src="~/assets/images/frontend/home/mobile.png" alt="">
                </div>
              </div>
              <div class="col-xl-7 col-lg-8 bg-light ps-0">
                <div class="px-xl-5 px-2 py-xxl-5 py-4">
                  <div class="ps-xl-0 ps-md-5 ps-0">
                    <h1 class="text-brand mb-0 work-title">Work <span class="fw-bold">when</span> you want,</h1>
                    <h1 class="text-brand work-title">doing <span class="fw-bold">what</span> you want.</h1>
                    <div class="mt-4">
                      <div>
                        <img class="work-icon" src="~/assets/images/frontend/home/work-icon-1.svg" alt="">
                        <h5 class="mb-0 d-inline-block ms-2 text-small">Earn extra income on your time schedule</h5>
                      </div>
                      <div class="my-xl-4 my-2">
                        <img class="work-icon" src="~/assets/images/frontend/home/work-icon-2.svg" alt="">
                        <h5 class="mb-0 d-inline-block ms-2 text-small">Grow your business, client-base, or even just your skills</h5>
                      </div>
                      <div>
                        <img class="work-icon" src="~/assets/images/frontend/home/work-icon-3.svg" alt="">
                        <h5 class="mb-0 d-inline-block ms-2 text-small">Access thousands of job opportunities, for free</h5>
                      </div>
                    </div>
                    <div class="mt-xl-4 mt-lg-0 mt-3 py-3">
                      <NuxtLink :to="{name: 'earn-money'}" class="rounded-outline-btn button-small">Earn money as a Tasker</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrontendHomeTaskersIncomeOnHitasksSection />
      <FrontendHomeBlogSection />
      <div class="py-5">
        <div class="container">
          <h1 class="text-brand text-center">Top Categories</h1>
          <p class="text-center text-18">See some of our top categories in your area</p>
          <div class="d-flex align-items-center flex-wrap justify-content-center pt-4 pb-5">
          <NuxtLink class="getting-done-link" to="/">A-C</NuxtLink>
          <NuxtLink class="getting-done-link" to="#">D-G</NuxtLink>
          <NuxtLink class="getting-done-link" to="#">H-P</NuxtLink>
          <NuxtLink class="getting-done-link" to="#">R-Z</NuxtLink>
          <NuxtLink class="getting-done-link" to="#">Cost Guides</NuxtLink>
          <NuxtLink class="getting-done-link" to="#">How to Guides</NuxtLink>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ips consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ips consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ips consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
      name: "HomePage",
      layout: 'frontend/default-layout',
      data() {
        return {
          title: 'Hello World!'
        }
      },
      head: {
        title: process.env.APP_NAME,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ],
      }
  }
  </script>

  <style scoped>
  .safe-secure-bg{
    background-image: url('~/assets/images/frontend/home/safe-secure-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 80px 50px;
    border-radius: 25px;
  }

  .safe-secure-card-top-margin{
    margin-top: 80px;
  }
  .getting-done-link{
    color: #414141;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    padding: 0 30px;
  }
  .section-top-padding{
    padding-top: 120px;
  }
  .purple-gradient-bg{
    background: rgb(102,45,145);
  background: linear-gradient(108deg, rgba(102,45,145,0.8463760504201681) 0%, rgba(102,45,145,0.76234243697479) 0%, rgba(102,45,145,0.37298669467787116) 58%, rgba(102,45,145,0.11248249299719892) 100%);
  padding: 60px 0;
  }
  .home-mobile-img{
    position: absolute;
    bottom: 0;
  }
  .work-icon{
    width: 20px;
    height: 20px;
  }
  .work-title{
    font-size: 32px;
  }
  .learn-more-btn:hover{
    color: white;
    background-color: var(--purpleLight);
    transition: all 0.3s ease;
  }
  @media(max-width:1399px){
    .home-mobile-img img{
      width: 88%;
    }
    .purple-gradient-bg{
      padding: 50px 0;
    }
    .work-title{
    font-size: 30px;
  }
  }
  @media(max-width:1199px){
    .home-mobile-img img{
      width: 65%;
    }
  }
  @media(max-width:991px){
    .safe-secure-card-top-margin{
      margin-top: 0;
      height: 100%;
    }
    .section-top-padding{
      padding-top: 0;
    }
  }

  @media(max-width:767px){
    .safe-secure-bg{
      padding: 50px;
      border-radius: 10px;
    }
  }
  @media(max-width:575px){

  }
  @media(max-width:499px){
    .safe-secure-bg{
      background-image: none;
      padding: 10px;
      border-radius: 0;
    }
    .work-icon{
  display: none;
  }
  }
  </style>
