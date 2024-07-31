<script setup lang="ts">
import { BuildFeaturesData } from "@/_mockApis/custom-components/index";
import { BuildFeatures } from "~/types/custom-components";
import { ref, computed } from "vue";
const dialog = ref(false);
const single = ref<BuildFeatures>();
function viewMore(item: any) {
  console.log(item);
  single.value = item;
  dialog.value = true;
}
const model = ref();
onMounted(() => {
  single.value = BuildFeaturesData[0];
});
const getColor = (item: BuildFeatures) => {
  if (item.title === single.value?.title) {
    return "primary";
  } else {
    return "accent";
  }
};
</script>
<template>
  <div class="bg-black py-md-15 py-8">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="8">
          <div class="text-center">
            <h2
              class="text-h2 text-white mb-4"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Pratice Area
            </h2>
            <p class="text-white text-h5 mb-4">
              You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time
            </p>
          </div>
        </v-col>
      </v-row>
      

      <v-row class="my-md-12 py-md-8 my-sm-4 rounded-md  ">
        <v-col cols="12" sm="12">
          <v-row>
            <v-col
              v-for="card in BuildFeaturesData"
              :key="card.title"
              :cols="card.flex"
            >
              <div
                @click="viewMore(card)"
                elevation="0"
                class="text-left border border-primary py-md-3 py-2 px-md-3 px-2 rounded-md"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <v-card-title
                  class="text-white font-weight-bold text-size-large"
                  v-text="card.title"
                ></v-card-title>

                <p class="text-muted mb-sm-3 mb-2 mt-2">
                  {{ card.desc.substring(0, 150) + "..." }}
                  <span class="text-secondary cursor-pointer"> Read more </span>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="false">
        <v-col
          v-for="card in BuildFeaturesData"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            @click="viewMore(card)"
            elevation="0"
            class="text-left py-md-3 py-2 px-md-3 px-2 rounded-md"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <v-card-title
              class="text-primary font-weight-bold text-size-large"
              v-text="card.title"
            ></v-card-title>

            <p class="text-muted mb-sm-3 mb-2 mt-2">
              {{ card.desc.substring(0, 100) + "..." }}
              <span class="text-primary"> Read more </span>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="700"
        :prepend-icon="single?.img"
        :title="single?.title"
      >
        <template v-slot:text>
          <v-img
            :src="single?.img"
            class="align-end rounded-md"
            
            height="260px"
            contain
          ></v-img>
          {{ single?.desc }}
        </template>
        <template v-slot:actions>
          <v-btn
            color="primary"
            variant="outlined"
            class="ms-auto text-dark"
            @click="dialog = false"
          >
            Close</v-btn
          >
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
