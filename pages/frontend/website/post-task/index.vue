<template>
  <div class="pt-md-5 pt-2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div>
            <div class="text-center">
              <h2 class="text-brand fw-bold">Post a task</h2>
              <div class="d-lg-block d-none">
                <FrontendPostTaskProgressBar :step-bar="stepBar" :step="step" />
              </div>
              <div class="d-lg-none d-block text-underline fw-bold text-lime"><h6>Step <span>{{ step }}</span>/4</h6></div>
            </div>
            <div v-if="step === 1">
              <FrontendPostTaskFormStepOne :step="step" @go-next="goNext" />
            </div>
            <div v-if="step === 2">
              <FrontendPostTaskFormStepTwo :step="step" @go-next="goNext" @go-back="goBack" />
            </div>
            <div v-if="step === 3">
              <FrontendPostTaskFormStepThree :step="step" @go-next="goNext" @go-back="goBack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

  <script>
  export default {
    name: 'PostTask',
    layout: 'frontend/multiform-layout',
    data(){
      return{
        formData:{
          stepOne:{
            certainTime: '',
            flexible: '',
            onDate: '',
            beforeDate: '',
          },
          stepTwo:{
            removalTask: '',
            removalTaskType: '',
          },
        },
        step:1,
        isRemoval: '',
        stepBar: [
            {
                id: 1,
                name: 'Title & Date'
            },
            {
                id: 2,
                name: 'Location'
            },
            {
                id: 3,
                name: 'Details'
            },
            {
                id: 4,
                name: 'Budget'
            }
        ],
      }
    },
    methods: {
      goNext(event) {
          this.step++
          if(event.removalTask !== ''){
            this.isRemoval = event.removalTask
          }
      },
      goBack() {
          this.step--
      },
    },
  }
  </script>

  <style>
  .horizontal-gray-line {
    border-top: 2px solid #cccccc;
    margin: 0 50px;
  }

  .line-active {
    border-top: 2px solid var(--brandColor);
  }

  .task-bar-margin {
    margin-top: -21px;
  }

  .progress-count {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #cccccc;
    border-radius: 50%;
    height: 38px;
    width: 38px;
    background-color: rgb(245, 245, 245);
    color: #cccccc;
    position: relative;
  }

  .progress-count span {
    line-height: 0;
    display: inline-block;
    padding-top: 5px;
  }

  .count-active {
    border-color: var(--brandColor) !important;
    color: var(--brandColor) !important;
    background-color: rgb(255, 242, 255);
    position: relative;
  }

  .task-bar-title {
    color: #cccccc;
  }

  .task-bar {
    margin-top: 30px;
    height: 60px;
  }

  .task-title {
    border-bottom: 1px solid gray;
  }


  </style>
