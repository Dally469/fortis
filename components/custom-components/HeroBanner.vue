<template>
  <div class="banner-wrapper align-center" style="min-height: 100svh">
    <v-container>
      <v-row
        style="width: 70%"
        class="align-center relative z-10 justify-space-between pt-md-7 content-word"
      >
        <v-col
          cols="12"
          md="12"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div class="d-flex align-center text-white mb-6">
            <div class="text-h4 text-white font-weight-bold">
              Area Of Practice That Can Help You To Win.
            </div>
          </div>
          <div class="text-lightmuted mb-6">
            <div class="container">
              <p class="d-flex">
                I <span ref="typedTextSpan" class="typed-text"></span
                ><span ref="cursorSpan" class="cursor">&nbsp;</span>
              </p>
            </div>
          </div>
        </v-col>
        <v-row v-if="false">
          <v-col cols="12" md="6" sm="6" class="px-xs-0">
            <div
              class="mt-md-6 col-span-1 text-h5 pr-md-2 py-md-2 rounded-lg text-secondary w-1/2"
            >
              Our mission is to provide access to quality and equitable justice
              to vulnerable groups and build the knowledge and capacity of
              justice actors.
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  image: String,
  buttonText: String,
});

const textArray = ref([
  "Corporate and Compliance Governance",
  "Business & Corporate Law",
  "Intellectual Property Law",
  "Family Law",
  "Real Estate Law",
  "Labor Law",
  "Procurement Law",
  "Tax Law",
  "Criminal Justice Law",
]);
const typingDelay = ref(200);
const erasingDelay = ref(100);
const newTextDelay = ref(2000); // Delay between current and next text
let textArrayIndex = ref(0);
let charIndex = ref(0);
const typedTextSpan = ref(0);
const cursorSpan = ref(0);
function type() {
  if (charIndex.value < textArray.value[textArrayIndex.value].length) {
    if (!cursorSpan.value.classList.contains("typing"))
      cursorSpan.value.classList.add("typing");
    typedTextSpan.value.textContent += textArray.value[
      textArrayIndex.value
    ].charAt(charIndex.value);
    charIndex.value++;
    setTimeout(() => type(), typingDelay.value);
  } else {
    cursorSpan.value.classList.remove("typing");
    setTimeout(() => erase(), newTextDelay.value);
  }
}

function erase() {
  if (charIndex.value > 0) {
    if (!cursorSpan.value.classList.contains("typing"))
      cursorSpan.value.classList.add("typing");
    typedTextSpan.value.textContent = textArray.value[
      textArrayIndex.value
    ].substring(0, charIndex.value - 1);
    charIndex.value--;
    setTimeout(() => erase(), erasingDelay.value);
  } else {
    cursorSpan.value.classList.remove("typing");
    textArrayIndex.value++;
    if (textArrayIndex.value >= textArray.value.length)
      textArrayIndex.value = 0;
    setTimeout(() => type(), typingDelay.value + 1100);
  }
}
onMounted(() => setTimeout(() => type(), 1000));
</script>
<style lang="css">
p {
  overflow: hidden;
}
.container p span.typed-text {
  font-weight: bold;
  color: white;
  font-size: 5rem;
  text-shadow: 1px 1px 1px rgb(110, 14, 14);
}
.container p span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.7rem;
  width: 5px;
  border-radius: 10px;
  animation: blink 1s infinite;
}
.container p {
  font-size: 5rem;
  font-weight: bold;
  color: transparent;
}
.container p span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0% {
    background-color: #ccc;
  }
  49% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #ccc;
  }
}
</style>
