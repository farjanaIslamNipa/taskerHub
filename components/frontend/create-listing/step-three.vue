<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="listing-form-view-height px-2 py-2">
                    <div class="bg-white basic-form card-shadow rounded py-4 px-4">
                        <h5 class="text-brand fw-bold">Price & package your listing</h5>
                        <p>Price your listing with a single price or up to 5 price packages.</p>
                        <div class="pt-2 d-md-none d-block">
                            <FrontendCreateListingHints />
                            <FrontendCreateListingHints />
                            <FrontendCreateListingAvoid />
                        </div>
                        <div class="pt-3">
                            <div v-if="!addPackage.packageOne" class="package-card-list p-3 mb-3">
                                <h5 class="text-capitalize mb-0 fw-bold text-gray text-18">package 1</h5>
                                <div><button class="rounded-outline-btn py-1 text-15 px-4 button-small" @click="addPackage.packageOne=!addPackage.packageOne">Add</button></div>
                            </div>
                            <div v-if="addPackage.packageOne">
                                <FrontendCreateListingPackageCard />
                            </div>
                        </div>
                        <div class="pt-3">
                            <div v-if="!addPackage.packageTwo" class="package-card-list p-3 mb-3">
                                <h5 class="text-capitalize mb-0 fw-bold text-gray text-18">package 2</h5>
                                <div><button class="rounded-outline-btn py-1 text-15 px-4 button-small" @click="addPackage.packageTwo=!addPackage.packageTwo">Add</button></div>
                            </div>
                            <div v-if="addPackage.packageTwo">
                                <FrontendCreateListingPackageCard />
                            </div>
                        </div>
                        <div class="pt-3">
                            <div v-if="!addPackage.packageThree" class="package-card-list p-3 mb-3">
                                <h5 class="text-capitalize mb-0 fw-bold text-gray text-18">package 3</h5>
                                <div><button class="rounded-outline-btn py-1 text-15 px-4 button-small" @click="addPackage.packageThree=!addPackage.packageThree">Add</button></div>
                            </div>
                            <div v-if="addPackage.packageThree">
                                <FrontendCreateListingPackageCard />
                            </div>
                        </div>
                        <div class="pt-3">
                            <div v-if="!addPackage.packageFour" class="package-card-list p-3 mb-3">
                                <h5 class="text-capitalize mb-0 fw-bold text-gray text-18">package 4</h5>
                                <div><button class="rounded-outline-btn py-1 text-15 px-4 button-small" @click="addPackage.packageFour=!addPackage.packageFour">Add</button></div>
                            </div>
                            <div v-if="addPackage.packageFour">
                                <FrontendCreateListingPackageCard />
                            </div>
                        </div>
                        <div class="pt-3">
                            <div v-if="!addPackage.packageFive" class="package-card-list p-3 mb-3">
                                <h5 class="text-capitalize mb-0 fw-bold text-gray text-18">package 5</h5>
                                <div><button class="rounded-outline-btn py-1 text-15 px-4 button-small" @click="addPackage.packageFive=!addPackage.packageFive">Add</button></div>
                            </div>
                            <div v-if="addPackage.packageFive">
                                <FrontendCreateListingPackageCard />
                            </div>
                        </div>
                        <h5 class="text-brand fw-bold mt-4 mb-2">Please note</h5>
                        <p>Customers will select 1 package when requesting to book your listing.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="pt-2 d-md-block d-none">
                    <FrontendCreateListingHints />
                    <FrontendCreateListingHints />
                    <FrontendCreateListingAvoid />
                </div>
            </div>
        </div>
        <div class="col-md-8 mb-4 mt-4">
            <div class="d-flex justify-content-between">
                <button class="rounded-outline-btn py-md-2 py-1 mx-2 w-100" @click="goBackward(step)">Back</button>
                <button class="rounded-fill-btn py-md-2 py-1 mx-2 w-100" @click="goForward(step)">Next</button>
            </div>
            <div class="text-center mt-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepTwo',
    props: ['step'],
    data() {
        return {
            addPackage: {
                packageOne: false,
                packageTwo: false,
                packageThree: false,
                packageFour: false,
                packageFive: false,
            }
        }
    },

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
.package-card-list{
    background-image: linear-gradient(to right, #662d914a 60%, transparent 50%), linear-gradient(to right, #662d914a 60%, transparent 50%), linear-gradient(to bottom, #662d914a 60%, transparent 50%), linear-gradient(to bottom, #662d914a 60%, transparent 50%);
    background-position: left top, left bottom, left top, right top;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 20px 1px, 20px 1px, 1px 20px, 1px 20px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>