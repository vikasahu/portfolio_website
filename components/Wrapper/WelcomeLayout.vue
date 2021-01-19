<template>
  <div>
    <div class="pw_logo">
      <Logo />
      <div class="pw_welcome_hello">
        <div class="pw_welcome_hello_txt">Welcome to My Website</div>
      </div>
    </div>
    <transition name="fade">
      <div class="pw_welcome">
        <div class="pw_welcome_bg">
          <transition name="fade_clr">
            <div class="pw_welcome_bg_red"></div>
          </transition>
          <transition name="fade_clr">
            <div class="pw_welcome_bg_grey"></div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pw_logo {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 99;
}

.fade_clr-enter-active,
.fade_clr-leave-active {
  // transition: opacity 3s;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade_clr-enter, .fade_clr-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
.pw_welcome {
  position: absolute;
  height: 100%;
  width: 100%;
  .pw_welcome_bg {
    height: inherit;
    width: inherit;
    display: flex;
    .pw_welcome_bg_red {
      height: 100%;
      width: 50%;
      background-color: red;
    }
    .pw_welcome_bg_grey {
      height: 100%;
      width: 50%;
      background-color: grey;
    }
  }
}

.pw_welcome_hello {
  width: 100%;
}
.pw_welcome_hello_txt {
  font-size: 52px;
  text-align: center;
  color: #2f495d;
}
</style>
