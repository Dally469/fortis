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
      <v-row v-if="false" class="justify-center">
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
    <div class="container">
      <div v-for="card in Team" :key="card.title" class="box">
        <div class="imgBox">
          <img :src="card.img" alt="" />
        </div>
        <div @click="viewMore(card)" class="content cursor-pointer d-flex">
          <h2>
            {{ card.title }} <br />
            <span>{{ card.subtitle }}</span> <br />
          </h2>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="800" :title="`Biography`">
        <template v-slot:text>
          <div class="d-flex space-x-4 mt-md-6">
            <div>
              <v-img
                :src="single?.img"
                class="align-end p-md-4 rounded-md"
                height="230px"
                width="200px"
              ></v-img>
            </div>
            <div class="ml-md-8">
              <div class="text-h3">{{ single?.title }}</div>
              <div class="text-h5 text-primary">{{ single?.subtitle }}</div>
              <div class="text-base mt-md-4">{{ single?.desc }}</div>
              <div class="d-flex mt-md-4">
                <div
                  class="px-md-4 text-primary"
                  v-for="social in single?.socialicon"
                  :key="social.icon"
                >
                  <a :href="social.url">
                    <i
                      :class="social.icon"
                      class="text-primary h-md-12 w-md-12"
                    ></i>
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
<style lang="css">
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
}

.container .box {
  position: relative;
  width: 30rem;
  height: 30rem;
  margin-top: 4rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

.container .box:hover .imgBox {
  transform: translate(-3.5rem, -3.5rem);
}

.container .box:hover .content {
  transform: translate(3.5rem, 3.5rem);
}

.imgBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
}

.imgBox img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  resize: both;
  border-radius: 10px;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 2px solid #4f000b;
  border-radius: 10px;
  z-index: 1;
  align-items: flex-end;
  text-align: center;
  transition: 0.5s ease-in-out;
}

.content h2 {
  display: block;
  font-size: 1.5rem;
  color: #111;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 1px;
}

.content span {
  color: #4f000b;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
}

@media (max-width: 600px) {
  .container .box:hover .content {
    transform: translate(0, 3.5rem);
  }
  .container .box:hover .imgBox {
    transform: translate(0, -3.5rem);
  }
}
</style>
