<script setup lang="ts">
import { Portfolio } from '@/_mockApis/custom-components/index';
</script>
<template>
    <div class="py-md-15 py-8">
        <v-container>
            <v-row class="justify-start">
                <v-col cols="12" sm="8">
                    <div class="text-start">
                        <div class="d-flex align-center mb-5 justify-start" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">Request</h6>
                        </div>
                        <h2 class="text-h2 text-dark mb-md-12 mb-6" data-aos="fade-left" data-aos-delay="200"
                            data-aos-duration="1000">Book an appointment</h2>
                    </div>
                </v-col>
            </v-row>
            <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
            <v-row justify="center">
                <v-col cols="12" md="6" >
                    <div class="my-md-11">
                        <form>
                            <v-row class="mt-1">
                                <v-col cols="12" md="12" class="py-0">
                                    <v-text-field label="Name" variant="outlined" color="primary"
                                        placeholder="Name"></v-text-field>
                                </v-col>
                              
                                <v-col cols="12" md="6" class="py-0">
                                    <v-text-field label="Phone" variant="outlined" color="primary"
                                        placeholder="Phone"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <v-text-field label="Email" variant="outlined" type="email" color="primary"
                                        placeholder="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0">
                                    <v-textarea name="message" color="primary" variant="outlined" label="Message"
                                        rows="3"></v-textarea>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <v-text-field label="Date" variant="outlined" color="primary"
                                        placeholder="Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <v-text-field label="Time" variant="outlined" color="primary"
                                        placeholder="Name"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-btn  to="/" class="mt-7 px-8 py-2"  flat size="large" color="primary">
                                Submit Appointment
                            </v-btn>
                        </form>
                    </div>
                </v-col>
                <v-col cols="12" md="6" >
                    <img src="/images/team/appoint.svg" alt="shape"   />

                </v-col>
            </v-row>
            <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
        </v-container>
    </div>
</template>