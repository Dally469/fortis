<script setup lang="ts">
import Header from "@/layouts/header/Header.vue";
import HeroBanner from "@/components/custom-components/HeroBanner.vue";
import Services from "@/components/custom-components/Services.vue";
import BuildAmazing from "@/components/custom-components/BuildAmazing.vue";
import BuildFeature from "@/components/custom-components/BuildFeature.vue";
import Contact from "@/components/custom-components/Contact.vue";
import UpgradetoPro from "@/components/custom-components/UpgradetoPro.vue";
import Footer from "@/layouts/footer/Footer.vue";
useSeoMeta({
  title:
    "Fortis Associates - We are one of the fastest growing law and top-tier firms in Rwanda",
  ogTitle:
    "Fortis Associates  - We are one of the fastest growing law and top-tier firms in Rwanda",
  ogType: "website",
  ogSiteName: "Fortis Associates ",
  ogUrl: "https://fortisassociates.rw/",
  lang: "en",
  icon: "https://fortisassociates.rw/images/favicon.png",
  twitterImage: "https://fortisassociates.rw/images/favicon.png",
  twitterTitle:
    "Fortis Associates  - We are one of the fastest growing law and top-tier firms in Rwanda",
  twitterDescription:
    "We are one of the fastest growing law and top-tier firms in Rwanda, with significant depth and expertise across a broad range of practice areas. As an integrated corporate and commercial legal practice, we pride ourselves on our service delivery. Our ever-growing team of industry specialists is commendable as a leader across multiple fields, offering a multi-disciplinary approach to service the requirements of our local and international clients.",
  description:
    "We are one of the fastest growing law and top-tier firms in Rwanda, with significant depth and expertise across a broad range of practice areas. As an integrated corporate and commercial legal practice, we pride ourselves on our service delivery. Our ever-growing team of industry specialists is commendable as a leader across multiple fields, offering a multi-disciplinary approach to service the requirements of our local and international clients.",
  ogDescription:
    "We are one of the fastest growing law and top-tier firms in Rwanda, with significant depth and expertise across a broad range of practice areas. As an integrated corporate and commercial legal practice, we pride ourselves on our service delivery. Our ever-growing team of industry specialists is commendable as a leader across multiple fields, offering a multi-disciplinary approach to service the requirements of our local and international clients.",
  ogImage: "https://fortisassociates.rw/images/favicon.png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <!--Header-->
  <Header />
  <HeroBanner />
  <!-- <Services /> -->
  <BuildAmazing />

  <BuildFeature />
  <Team />
  <Contact />

  <!-- <Testimonials /> -->

  <UpgradetoPro />
  <Footer />
</template>
