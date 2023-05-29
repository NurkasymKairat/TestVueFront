<template>
  <IntroApp>
    <SignUp></SignUp>
  </IntroApp>
</template>
<script>
import IntroApp from "@/components/IntroApp.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "App",
  components: {
    IntroApp,
    SignUp,
  },
};
</script>
