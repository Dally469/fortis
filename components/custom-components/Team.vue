<script setup lang="ts">
import { Team } from "@/_mockApis/custom-components/index";
import { TeamSection } from "~/types/custom-components";
const dialog = ref(false);
const single = ref<TeamSection>();
function viewMore(item: any) {
  console.log(item);
  single.value = item;
  dialog.value = true;
}
</script>
<template>
  <div class="py-md-15 py-8">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="8">
          <div class="text-center">
            <h2
              class="text-h2 text-primary mb-3"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Team
            </h2>
            <p class="text-muted mb-4">
              We are one of the fastest growing law and top-tier firms in
              Rwanda, with significant depth and expertise across a broad range
              of practice areas.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" md="4" sm="6" v-for="card in Team" :key="card.title">
          <v-card elevation="0" class="team-card mb-7">
            <div class="social-overlay overflow-hidden rounded-md">
              <img :src="card.img" :alt="card.img" class="img-fluid" />
              <div class="img-overlay">
                <ul>
                  <li v-for="social in card.socialicon" :key="social.icon">
                    <a :href="social.url">
                      <i :class="social.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="justify-center">
              <h5 class="text-h4 text-center font-weight-medium mt-4">
                {{ card.title }}
              </h5>
              <p class="text-subtitle-1 text-center text-primary mb-3">
                {{ card.subtitle }}
              </p>
              <div
                @click="viewMore(card)"
                class="text-center cursor-pointer border mx-auto py-2 hover:bg-primary hover:text-white"
              >
                Read Biography
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="800" :title="`Biography`">
        <template v-slot:text>
          <div class="d-flex space-x-4 mt-md-6">
            <div>
              <v-img
                :src="single?.img"
                class="align-end p-md-4 rounded-md "
                height="230px"
                width="200px"
              ></v-img>
            </div>
            <div class="ml-md-8">
                <div class="text-h3">{{ single?.title }}</div>
                <div class="text-h5 text-primary">{{ single?.subtitle }}</div>
                <div class="text-base mt-md-4">{{ single?.desc }}</div>
                <div class="d-flex  mt-md-4">
                    <div class="px-md-4 text-primary" v-for="social in single?.socialicon" :key="social.icon">
                    <a :href="social.url">
                      <i :class="social.icon" class="text-primary h-md-12 w-md-12"></i>
                    </a>
                  </div>
                </div>
            </div>
          </div>
 
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
