<script setup lang="ts">
import Header from "@/layouts/header/Header.vue";
import PageHeroBanner from "@/components/custom-components/PageHeroBanner.vue";
import UpgradetoPro from "@/components/custom-components/UpgradetoPro.vue";
import Footer from "@/layouts/footer/Footer.vue";
import { ConnectData } from "@/_mockApis/custom-components/index";

</script>
<template>
  <!--Header-->
  <Header />
  <PageHeroBanner title="Connect with us" subtitle="Need a legal help? We are effective law agency." />

  <div class="py-md-15 bg-white py-8">
    <v-container>

      <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col v-for="card in ConnectData" cols="12" md="4">
          <v-card elevation="0" class="team-card mb-7">
            <div class="social-overlay overflow-hidden rounded-md">
              <img :src="card.photo" :alt="card.title" height=250 width=400 class="photo" />
              <div class="img-overlay">
                <ul>
                  <li>
                    <a :href="card.url">
                      <i :class="card.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="justify-center">
              <h5 class="text-h2 text-start font-weight-semibold mt-4">
                {{ card.title }}
              </h5>
              <p class="text-subtitle text-start text-dark pb-md-6 pt-md-3">
                {{ card.desc }}
              </p>
              <nuxt-link :to="card.url"
                class="text-center cursor-pointer border border-black text-decoration-none mx-auto px-6 py-2 text-h6 font-weight-semibold hover:bg-primary hover:text-white">
                {{ card.btnName }}
              </nuxt-link>
            </div>
          </v-card>
        </v-col>

      </v-row>
      <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
    </v-container>
  </div>

  <!-- <Testimonials /> -->

  <UpgradetoPro />
  <Footer />
</template>
<style>
.photo{
  object-fit: cover;
}
</style>
