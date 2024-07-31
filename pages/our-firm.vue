<script setup lang="ts">
import Header from '@/layouts/header/Header.vue';
import PageHeroBanner from '@/components/custom-components/PageHeroBanner.vue';
import Services from '@/components/custom-components/Services.vue';
import BuildAmazing from '@/components/custom-components/BuildAmazing.vue';
import BuildFeature from '@/components/custom-components/BuildFeature.vue';
 import Team from '@/components/custom-components/Team.vue';
 import Contact  from '@/components/custom-components/Contact.vue';
import UpgradetoPro from '@/components/custom-components/UpgradetoPro.vue';
import Footer from '@/layouts/footer/Footer.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <PageHeroBanner title="Law Firm" subtitle="Need a legal help? We are effective law agency." />
        
        <BuildAmazing />
        
         <Team/>
         
        <!-- <Testimonials /> -->
       
        <UpgradetoPro/>
    <Footer />
</template>

