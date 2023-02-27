<template>
    <div>
        <div class="row">
            <div class="col-md-8 px-1">
                <div class="listing-form-view-height py-2 px-2">
                    <div class="bg-white basic-form card-shadow rounded py-4 px-4">
                        <h5 class="text-brand fw-bold">What type of service will this listing offer?</h5>
                        <p>Choose a category that best describes the service being offered in this listing. This will help
                            customers find and book your listing.</p>
                        <div class="pt-2 d-md-none d-block">
                            <FrontendCreateListingHints />
                            <FrontendCreateListingHints />
                        </div>
                        <div class="mb-4 mt-5">
                            <label class="fw-bold">Choose a main category</label>
                            <multi-select v-model="selected" :options="options" :show-labels="false"></multi-select>
                        </div>
                        <div class="mb-5">
                            <label class="fw-bold" for="">Choose a main subcategory</label>
                            <multi-select v-model="subCategory" :options="subCategoryOptions" :show-labels="false"></multi-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 d-md-block d-none">
                <div class="pt-2">
                    <FrontendCreateListingHints />
                    <FrontendCreateListingHints />
                </div>
            </div>
        </div>
        <div class="col-md-8 mb-4">
            <div class="text-center mt-4"><button class="rounded-fill-btn py-md-2 py-1 w-75" @click="goForward(step)">Next</button></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepOne',
    props: ['step'],
    data() {
        return {
            selected: null,
            subCategory: null,
            options: ['Auto Electrical', 'Hair and Beauty', 'Cleaning'],
            subCategoryOptions: ['Auto Electrical', 'Hair and Beauty', 'Cleaning'],
        }
    },
    methods: {
            goForward(step) {
                this.$emit("go-next", step);
            },
        },
}
</script>

<style scoped>

</style>