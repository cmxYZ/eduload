<template>
  <Header :key="this.role" :role="this.role"></Header>
  <div class="w-page" v-if="showSingIn">
    <Welcome ></Welcome>
    <button class="signin-button" @click="login">Войти с помощью учетной записи УрФУ</button>
  </div>
  <div class="float">
    <span class="reg" v-if="!showSingIn">{{ name }}</span>
    <button class="reg-button" @click="logout" v-if="!showSingIn">Выйти</button>
  </div>
  <router-view :key="this.role" :role="this.role" :accountName="this.accountName" v-if="!showSingIn"></router-view>
</template>

<script>
import Header from "@/components/Header.vue";
import Keycloak from "keycloak-js";
import Welcome from "@/components/Welcome.vue";

const keycloak = new Keycloak({
  "url": "https://keys.urfu.ru/auth/",
  "realm": "urfu-lk",
  "clientId": "rtf-eduload",
  "public_key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt201JHU3XjmpVTbO8uZsG/nq39zPhd9rQX9fiPJtcjUWl+elVOy6IaMPs2wfsUQkU1SnUKWGYLdO+YEg4zk0z0nTpzaBubYgPlZ5MzERPPNlbaPQxv/kbojiYQr5CrZF4TUrALZ0qHzYpx346wNJiQ3cHVHNbY8VI2+bsKQoBslNfUlQhxdjgH9H8523rM8PRXUB4MrzV/kfuPrDXce7W6GlS8lN5QT/hxlfTJb3lXSRH8yuDTH8LPxQKVtnw9qgc0QIwi7lAIVcaY5s4ixKPd6jL5LRGEjot6yRSb4WEUM1DYcwIMgMBPK1WWCqDuWQYcjwM9VMhomJc4Zx9V/snQIDAQAB",
  "token-service": "https://keys.urfu.ru/auth/realms/urfu-lk/protocol/openid-connect",
  "account-service": "https://keys.urfu.ru/auth/realms/urfu-lk/account",
  "tokens-not-before": 0,
});

export default {
  beforeMount() {
    this.updateKC();
  },
  components: {
    Header,
    Welcome
  },
  data() {
    return {
      role: '',
      accountName: 'not set',
      showSingIn: true,
      name: "Not Auth",
      isAuth: false,
    };
  },
  methods: {
    async updateKC()
    {
      await keycloak.init({
        onLoad: "check-sso",
      });
      if (keycloak.authenticated) {
        this.name = keycloak.tokenParsed.user.person.title;
        this.showSingIn = false;
        this.accountName = keycloak.tokenParsed.user.person.id;
        let url = 'http://212.193.88.196:8080/checkuser?login=' + keycloak.tokenParsed.user.person.email + '&isKeycloak=1&samAccountName=' + keycloak.tokenParsed.user.person.id;
        await fetch(url).then((resp) => resp.text())
            .then((razm) => (this.role = razm));
      }
    },
    async login() {
      if (!keycloak.authenticated) {
        await keycloak.login();
      } else {
        this.name = keycloak.tokenParsed.user.person.title;
        this.isAuth = true;
      }
    },
    async logout() {
      if (keycloak.authenticated) {
        await keycloak.logout();
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.signin-button {
  padding: 10px;
  border-radius: 10px;
  margin-left: 18%;
  margin-top: 15px;
  cursor: pointer;
  display: inline-flex;
  width: 200px;
  font-size: 16px;
}
.w-page{
  display: flex;
  align-items: center;

}
.reg-button {
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 15px;
  cursor: pointer;
  display: inline-flex;
}

.reg {
  display: inline-flex;
  margin-top: 15px;
  margin-left: 20px;
  font-size: 20px;
}

.float {
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
}
.ag-theme-alpine {
  --ag-cell-horizontal-padding: 10px !important;
}
</style>
