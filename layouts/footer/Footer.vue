<template>
  <!-- -----------------------------------------------
          Start Footer
    ----------------------------------------------- -->
  <v-footer class="footer bg-black px-0">
    <v-container>
      <v-row class="py-6 py-sm-12">
        <!-- -----------------------------------------------
          First Column
        ----------------------------------------------- -->
        <v-col cols="12" md="6" sm="6" class="px-xs-0">
          <Logo />
          <p class="mt-5 text-h5 text-white">
            We are one of the fastest growing law and top-tier firms in Rwanda,
            with significant depth and expertise across a broad range of
            practice areas.
          </p>
        </v-col>
        <!-- -----------------------------------------------
          Second Column
        ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-medium mb-5 text-h4 text-white">Phone</h4>
          <p class="mt-5 text-white">Reception : +250 788 956 848</p>
          <p class="text-white">Office : +250 788 360 994</p>
        </v-col>
        <!-- -----------------------------------------------
          Third Column
        ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-medium mb-5 text-h4 text-white">Email</h4>
          <p class="mt-5 text-white">
            Office :
            <NuxtLink
              class="text-white text-decoration-none"
              to="mailto:info@fortisasociates.rw"
            >
              info@fortisasociates.rw
            </NuxtLink>
          </p>
          <p>
            <span class="text-white">Site : </span>
            <NuxtLink
              class="text-white text-decoration-none"
              href="https://fortisasociates.rw/"
              >fortisasociates.rw
            </NuxtLink>
          </p>
        </v-col>
      </v-row>
      <v-row class="py-8 py-sm-12">
        <!-- -----------------------------------------------
          First Column
        ----------------------------------------------- -->
        <v-col cols="12" md="4" sm="6" class="px-xs-0">
          <h4 class="font-weight-medium mb-5 text-h3 text-white">
            QUICK LINKS
          </h4>
          <div
            class="mt-2 text-white text-5 cursor-pointer text-white"
            v-for="(menu, i) in sidebarItem"
          >
            <nuxt-link :to="menu.to" class="text-white decorationText">
              {{ menu.title }}</nuxt-link
            >
          </div>
        </v-col>
        <!-- -----------------------------------------------
          Second Column
        ----------------------------------------------- -->

        <!-- -----------------------------------------------
          Fourth Column
        ----------------------------------------------- -->
        <v-col cols="12" md="4" sm="6" class="px-xs-0">
          <h4 class="font-weight-medium mb-5 text-h3 text-white">Social</h4>
          <div class="social-icons text-white mt-5">
            <NuxtLink to="/">
              <i class="mdi mdi-facebook"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-twitter"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-google-plus"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-youtube"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-instagram"></i>
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="6" class="px-xs-0">
          <h4 class="font-weight-medium mb-5 text-h3 text-white">
            Connect with Us
          </h4>
          <div class="social-icons text-white mt-5">
            <NuxtLink to="/">
              <i class="mdi mdi-facebook"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-twitter"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-google-plus"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-youtube"></i>
            </NuxtLink>
            <NuxtLink to="/">
              <i class="mdi mdi-instagram"></i>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar mt-sm-5 mt-0 font-14 ml-sm-0 ml-n3">
        <div class="d-block d-sm-flex align-center">
          <p class="text-white mb-sm-0 mb-3">
            All Rights Reserved by
            <NuxtLink
              to="https://www.fortisasociates.rw"
              class="text-white text-decoration-none"
              >fortisasociates.rw</NuxtLink
            >
          </p>
          <div class="ml-auto">
            <NuxtLink
              to="/"
              class="text-white text-decoration-none px-sm-4 px-2"
              >Privacy Policy</NuxtLink
            >
          </div>
        </div>
        
      </div>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
          End Footer
    ----------------------------------------------- -->
</template>
<script lang="ts" setup>
import sidebarItem from "@/_mockApis/header/Menu";
import Logo from "@/layouts/logo/logo.vue"

</script>
