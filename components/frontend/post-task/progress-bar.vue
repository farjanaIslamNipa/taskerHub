<template>
    <div class="position-relative">
       <div class="progressbar-container">
            <ul class="progressbar p-0 ms-2">
              <li v-for="(list, index) in stepBar" :key="index" :class="index <= step - 1 ? 'active' : ''">
                  <span class="text-500 ms-3" :class="index <= step - 1 ? 'text-brand' : 'text-light-gray'">{{ list.name }}</span>
              </li>
            </ul>
        </div>
    </div>
  </template>
  
  <script>
      export default {
          name: 'ProgressBar',
          props: ['step-bar', 'step',]
      }
  </script>
  
  <style scoped>
  .progressbar{
  counter-reset: step;
}
  .progressbar li{
    display: inline-block;
    width: 120px;
    align-items: center;
    position: relative;
    list-style: none;
    /* padding-bottom: 40px; */
  }
  .progressbar li:before{
    content:counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    border: 2px solid #e0e0e0;
    display: block;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    font-size: 14px;
    line-height: 29px;
    background: #e0e0e0;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .progressbar li:after{
    content: '';
  position: absolute;
  width:100%;
  height: 3px;
  top: 15px;
  left: -50%;
  z-index: -1;
    background: #e0e0e0;

  }
  .progressbar li.active:before{
   border-color: var(--brandColor);
   background: var(--brandColor);
   color: white
  }
  .progressbar li.active:after{
   background: var(--brandColor);
  }
  .progressbar li.active li:after{
   background: var(--brandColor);
  }
  .progressbar li.active li:before{
  border-color: var(--brandColor);
  background: var(--brandColor);
  color: white
  }
  .progressbar li:first-child:after{
   content: none;
  }
  </style>