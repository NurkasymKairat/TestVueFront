<template>
  <section class="sign">
    <div class="sign_wrapper">
      <div class="sign_close">
        <img src="@/assets/img/Circlebutton.svg" alt="" />
      </div>
      <div class="sign_info">
        <div class="sign_logo">
          <img src="@/assets/img/logo.svg" alt="" />
          <h3>Brainwave</h3>
        </div>
        <div class="sign_toggle">
          <button
            v-for="(btn, i) in btns"
            :class="{ btn_active: activeIndex == i }"
            @click="activeBtn(i)"
            :key="i"
            class="sign_btn"
          >
            {{ btn }}
          </button>
        </div>
        <div class="sign_auth">
          <button>
            <img src="@/assets/img/google.svg" alt="" />
            Continue with Google
          </button>
          <button>
            <img src="@/assets/img/apple.svg" alt="" />
            Continue with Apple
          </button>
        </div>
        <div class="sign_or">OR</div>
        <form>
          <div class="sign_inputs">
            <div class="sign_input">
              <input
                v-model="emailValue"
                type="email"
                @input="emailValidete"
                placeholder="Username or email"
                name="mail"
              />
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <span>{{ emailPat }}</span>
            </div>
            <div class="sign_input">
              <input
                @input="passValidete"
                v-model="passValue"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span>{{ passPat }}</span>
              <font-awesome-icon icon="fa-solid fa-lock" />
            </div>
          </div>
          <div class="sign_password">
            <a href="#">Forgot password?</a>
          </div>
          <div class="sign_up_btn">
            <button @click.prevent="btnDisable" >Sign in with Brainwave</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sign",

  data() {
    return {
      isDisable: false,
      passValue: "",
      passPat: "",
      activeIndex: null,
      emailValue: "",
      emailPat: "",
      btns: ["Sign in", "Create account"],
      email: "",
      emailRules: [
        (value) => {
          if (value) return true;

          return "E-mail is requred.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
    };
  },

  mounted() {
    this.activeIndex = 0;
  },

  computed: {},

  methods: {
    activeBtn(index) {
      this.activeIndex = index;
    },
    emailValidete() {
      if (this.emailValue.length == 0) {
        this.emailPat = "E-mail is required";
        return false;
      }

      if (
        !this.emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
      ) {
        this.emailPat = "Email is incorrect";
        return false;
      }

      this.emailPat = "";

      return true;
    },

    passValidete() {
      if (this.passValue.length == 0) {
        this.passPat = "Password is required";
        return false;
      }

      this.passPat = "";
      return true;
    },

    btnDisable() {
      this.emailValidete() && this.passValidete(); 
    }
  },
};
</script>
