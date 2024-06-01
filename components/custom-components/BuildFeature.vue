<script setup lang="ts">
import { BuildFeaturesData } from '@/_mockApis/custom-components/index';
import { BuildFeatures } from '~/types/custom-components';
const dialog = ref(false)
const single = ref<BuildFeatures>()
function viewMore(item: BuildFeatures) {
    console.log(item)
    single.value = item;
    dialog.value = true
}
</script>
<template>
    <div class="bg-lightmuted py-md-15 py-8">

        <v-container>
            <v-row class="justify-center">
                <v-col cols="12" sm="8">
                    <div class="text-center">

                        <h2 class="text-h2 text-dark mb-4" data-aos="fade-left" data-aos-delay="200"
                            data-aos-duration="1000">Our Pratice Area</h2>
                        <p class="text-muted  mb-4">You can relay on our amazing features list and also our customer
                            services will be great experience for you without doubt and in no-time</p>

                    </div>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="12" md="3" sm="6" v-for="card in BuildFeaturesData" :key="card.title">
                    <v-card elevation="0" class="text-center py-md-8 py-6 px-md-4 px-2  rounded-md" data-aos="fade-up"
                        data-aos-delay="200" data-aos-duration="1000">
                        <component :is="card.icon" class="text-primary" stroke-width="1.5" size="40" />
                        <h4 class="text-h6 text-dark font-weight-bold my-sm-6 my-2 px-md-2">{{ card.title }}</h4>
                        <p class="text-muted mb-sm-6 mb-4">{{ card.desc.substring(0, 80) }}</p>
                        <div @click="viewMore(card)"
                            class="text-decoration-none cursor-pointer text-subtitle-1 d-flex justify-center align-center text-primary hover-primary">
                            Read More
                            <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialog" width="auto">
            <v-card max-width="500" :prepend-icon="single?.icon"
               
                :title="single?.title">
                <template v-slot:text>
                    {{ single?.desc }}
                </template>
                <template v-slot:actions>
                    <v-btn color="primary" variant="outlined" class="ms-auto text-dark"   @click="dialog = false"> Close</v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>