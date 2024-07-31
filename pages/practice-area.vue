<script setup lang="ts">
import Header from '@/layouts/header/Header.vue';
import PageHeroBanner from '@/components/custom-components/PageHeroBanner.vue';
import BuildFeature from '@/components/custom-components/BuildFeature.vue';
import UpgradetoPro from '@/components/custom-components/UpgradetoPro.vue';
import Footer from '@/layouts/footer/Footer.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <PageHeroBanner title="Practice Area" subtitle="Need a legal help? We are effective law agency." />
      
        <BuildFeature />
     
        <UpgradetoPro/>
    <Footer />
</template>

