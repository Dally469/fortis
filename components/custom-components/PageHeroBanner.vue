<template>
  <div class="banner-wrapper-page align-center" >
    <v-container>
      <v-row
        class="text-center text-white content-word mt-md-4  "
      >
        <v-col
          cols="12"
          md="12"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
           
          <h1 class="text-h1 text-lightmuted mb-6">
           {{title}}
          </h1>
          <p class="text-body-1  mb-8">
           {{ subtitle}}
          </p>
         
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
   
});
</script>
