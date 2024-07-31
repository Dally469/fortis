<script setup lang="ts">
import Header from "@/layouts/header/Header.vue";
import PageHeroBanner from "@/components/custom-components/PageHeroBanner.vue";
import Contact from "@/components/custom-components/Contact.vue";
import UpgradetoPro from "@/components/custom-components/UpgradetoPro.vue";
import Footer from "@/layouts/footer/Footer.vue";
</script>
<template>
  <!--Header-->
  <Header />
  <PageHeroBanner
    title="Book Consultation"
    subtitle="We welcome and value contributions from scholars, professionals, and passionate individuals who seek to shed light on challenges in Africa."
  />

  <div class="py-md-15 bg-white py-8">
    <v-container>
      <v-row class="justify-start">
        <v-col cols="12" sm="8">
          <div class="text-start">
           
          </div>
        </v-col>
      </v-row>
      <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
        
        <v-col cols="12" md="6">
          <div class="my-md-11">
            <form>
              <v-row class="mt-1">
                <v-col cols="12" md="12" class="py-0">
                  <v-text-field
                    label="Name"
                    variant="outlined"
                    color="primary"
                    placeholder="Name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="py-0">
                  <v-text-field
                    label="Phone"
                    variant="outlined"
                    color="primary"
                    placeholder="Phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <v-text-field
                    label="Email"
                    variant="outlined"
                    type="email"
                    color="primary"
                    placeholder="Email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-textarea
                    name="message"
                    color="primary"
                    variant="outlined"
                    label="Message"
                    rows="3"
                  ></v-textarea>
                </v-col>
              
              </v-row>
              <v-btn
                to="/"
                class="mt-7 px-8 py-2"
                flat
                size="large"
                color="primary"
              >
                Submit 
              </v-btn>
            </form>
          </div>
        </v-col>
        <v-col cols="12" md="2">
         <v-date-picker
        color="primary"
      ></v-date-picker>
        </v-col>
        <v-col cols="12" md="4">
          <img
            src="/images/Consultation.jpg"
            alt="shape"
            class="rounded-lg object-cover"
            height=400
            width=400
          />
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
