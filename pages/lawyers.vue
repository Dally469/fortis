<script setup lang="ts">
import Header from "@/layouts/header/Header.vue";
import PageHeroBanner from "@/components/custom-components/PageHeroBanner.vue";

import Team from "@/components/custom-components/Team.vue";

import UpgradetoPro from "@/components/custom-components/UpgradetoPro.vue";
import Footer from "@/layouts/footer/Footer.vue";
</script>
<template>
  <!--Header-->
  <Header />
  <PageHeroBanner
    title="Team"
    subtitle="Need a legal help? We are effective law agency."
  />

  <Team />

  <UpgradetoPro />
  <Footer />
</template>
