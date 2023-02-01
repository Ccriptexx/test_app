<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <div class="menuItems">
          <img src="../src/assets/logo.svg" alt="logo" class="logo">
        </div>

        <div class="menuItems">
          <a href="#" class="telefon pcScreen">+7 (499) 705 78 93</a>
          <a href="#">
            <img src="../src/assets/Telephone.svg" alt="telefonLogo" class="telefonLogo phoneScreen">
          </a>
        </div>

        <div class="menuItems">
          <a href="#" class="questions pcScreen">Вопросы и ответы</a>
          <a href="#">
            <img src="../src/assets/Message.svg" alt="questions" class="questionsLogo phoneScreen">
          </a>
        </div>

        <div class="menuItems phoneScreen">
          <a href="#">
            <img src="../src/assets/menu.svg" alt="menu" class="menuLogo phoneScreen">
          </a>
        </div>

        <div class="menuItems lustCH">
          <div class="login"><a href="#">Вход</a></div>
          <div class="register"><a href="#">Регистрация</a></div>
        </div>

      </div>

      <PhoneLogin v-if="getOpenLoginPhone"/>

      <MailLogin v-if="getOpenLoginMail"/>

      <div class="aboutUs">
        <img class="aboutUsLogo" src="@/assets/aboutUs.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import MailLogin from './views/MailLogin.vue';
import PhoneLogin from './views/PhoneLogin.vue';
import { mapGetters } from 'vuex'

export default {
  props: ['value'],
  computed: {
    ...mapGetters([
      'getOpenLoginPhone',
      'getOpenLoginMail',
    ]),
  },
  components: {
    MailLogin, PhoneLogin
  }
}
</script>

<style>
@import '../public/index.css';
</style>
