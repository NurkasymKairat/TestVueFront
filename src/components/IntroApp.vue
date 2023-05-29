<template>
  <section class="intro">
    <div class="container">
      <div class="intro_wrapper">
        <div class="intro_info">
          <div class="intro_title">Unlock the power of AI</div>
          <div class="intro_text">
            Chat with the smartest AI - Experience the power <br />
            of AI with us
          </div>

          <div class="intro_img">
            <img src="@/assets/img/04.png" alt="" />
          </div>
        </div>
        <slot> </slot>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "IntroApp",
};
</script>
