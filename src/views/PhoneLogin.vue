<template>
  <div class="content">
    <h1 class="header pcScreen">Вход</h1>
    <div class="formPhone">
      <h2 class="infoEboutLogin">На указанный телефон придет СМС с кодом для входа.</h2>
    <div class="formLoginPhone">
      <input type="phone" placeholder="Телефон" class="inputPhone" v-model="valueInput"> 
      <button class="submitPhone" type="button" @click="this.writeInConsole">Войти по смс-коду</button>
      <p class="pLogin">
        <label class="regulationsLogin">
          <span class="regulationsInfo">Авторизуясь на сайте, вы соглашаетесь 
            с <a href="#" class="linkInfo">политикой конфиденциальности </a>и даете согласие 
            на обработку персональных данных, а также подтверждаете, 
            что <a href="#" class="linkInfo">Ознакомлены и согласны с условиями Договора</a></span>
            <input type="checkbox" class="checkBox" v-model="cheked">
          </label>
      </p>
      <a href="#" class="emailLogin" @click="this.showLoginByEmail">ВОЙТИ ПО EMAIL</a>
      <div class="aboutUsLink"  @click="this.showAboutUs">
        <img src="../assets/aboutWork.svg" alt="" class="aboutWork">
      </div>
      <div class="aboutUsPhone" v-if="aboutUs">
        <img class="aboutUsLogoPhone" src="../assets/aboutUsPhoneLogo.jpg" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    cheked: false,
    valueInput: '',
    aboutUs: false,
  }),
  name: 'phoneLogin',
  methods: {
    ...mapMutations([
    'setOpenLoginPhon',
    'setOpenLoginMail',
    ]),
    showLoginByEmail() {
      this.setOpenLoginMail(true)
      this.setOpenLoginPhon(false)
    },
    writeInConsole() {
      if (this.cheked) {
        console.log(this.valueInput)
        this.valueInput = ''
      }
    },
    showAboutUs() {
      this.aboutUs = !this.aboutUs
      let id;
      if (this.aboutUs) {
        id = setInterval(() => {
          if (this.aboutUs && document.documentElement.clientWidth >= 955) {
              this.aboutUs = false
          }
        }, 100)
      } else if (id) {
        clearInterval(id)
      }
    }
  }
}
</script>

