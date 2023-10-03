<template>
    <div>
        <div class="row">
            <div class="col-md-8 px-0">
                <div class="listing-form-view-height px-2 py-2">
                    <div class="bg-white basic-form card-shadow rounded pt-5 pb-5 px-4">
                        <h5 class="text-brand fw-bold">Auto-send a message to new customers</h5>
                        <div class="pt-2 d-md-none d-block">
                            <FrontendCreateListingHints />
                        </div>
                        <p class="mb-2 text-gray">Write a message to be automatically sent to customers when they request to book your listing</p>
                        <textarea type="text" class="form-control textarea-resize mb-4" rows="6" placeholder="Thanks for booking my listing! I’ll need a few things from you to get started..."></textarea>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="pt-2 d-md-block d-none">
                    <FrontendCreateListingHints />
                </div>
            </div>
        </div>
        <div class="col-md-8 mb-4 mt-4">
            <div class="d-flex justify-content-between">
                <button class="rounded-outline-btn py-2 mx-2 w-100" @click="goBackward(step)">Back</button>
                <button class="rounded-fill-btn py-2 mx-2 w-100" @click="$router.push('/listing')">Publish listing</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepTwo',
    props: ['step'],
    methods: {
            goForward(step) {
                this.$emit("go-next", step);
            },

            goBackward(step) {
                this.$emit("go-back", step);
            },
        },
}
</script>

<style scoped>

</style>