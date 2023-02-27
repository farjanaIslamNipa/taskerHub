<template>
    <div class="container pt-lg-5 pt-3">
        <div class="row">
            <div class="col-lg-3 col-12">
                <div class="d-lg-block d-none">
                    <div class="sticky-listing-menu">
                        <FrontendIncludesStepProgressBar :step-bar="stepBar" :step="step" :current-step="currentStep" />
                    </div>
                </div>
                <div class="d-lg-none d-block text-underline fw-bold text-lime"><h6>Step <span>{{ step }}</span>/7</h6></div>
            </div>
            <div class="col-lg-9 col-12">
                <div>
                    <h3 class="text-brand fw-bold mb-2">Create your listing</h3>
                    <div v-if="step === 1">
                        <FrontendCreateListingStepOne :step="step" @go-next="goNext" />
                    </div>
                    <div v-if="step === 2">
                        <FrontendCreateListingStepTwo :step="step" @go-next="goNext" @go-back="goBack" />
                    </div>
                    <div v-if="step === 3">
                        <FrontendCreateListingStepThree :step="step" @go-next="goNext" @go-back="goBack" />
                    </div>
                    <div v-if="step === 4">
                        <FrontendCreateListingStepFour :step="step" @go-next="goNext" @go-back="goBack" />
                    </div>
                    <div v-if="step === 5">
                        <FrontendCreateListingStepFive :step="step" @go-next="goNext" @go-back="goBack" />
                    </div>
                    <div v-if="step === 6">
                        <FrontendCreateListingStepSix :step="step" @go-next="goNext" @go-back="goBack" />
                    </div>
                    <div v-if="step === 7">
                        <FrontendCreateListingStepSeven :step="step" @go-next="goNext" @go-back="goBack" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CreateListing',
        layout: 'frontend/multiform-layout',
        data() {
            return {
                step: 1,
                currentStep: {
                    value: '',
                },
                stepBar: [
                    {
                        id: 1,
                        name: 'Category'
                    },
                    {
                        id: 2,
                        name: 'Description'
                    },
                    {
                        id: 3,
                        name: 'Pricing & Packaging'
                    },
                    {
                        id: 4,
                        name: 'Location'
                    },
                    {
                        id: 5,
                        name: 'Availability'
                    },
                    {
                        id: 6,
                        name: 'Images'
                    },
                    {
                        id: 7,
                        name: 'Booking Message'
                    },
                ],
                selected: null,
                options: ['Auto Electrical', 'Hair and Beauty', 'Cleaning'],
            }
        },
        methods: {
            goNext() {
                this.step++
         
            },
            goBack() {
                this.step--
            },
        },
        
    }
</script>

<style scoped>
.sticky-listing-menu{
    position: sticky;
    top: 80px;
    z-index: 99999;
}
</style>