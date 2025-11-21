<script>
export default {
  methods: {
    switchLanguage() {
            const locale = this.$i18n.locale;
            if (locale === 'en') {
                this.$i18n.locale = 'km';
            } else {
                this.$i18n.locale = 'en';
            }
        }
  }
};
</script>
<template>
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <router-link class="navbar-brand" to="/">
            <span>
              Finexo
            </span>
          </router-link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item" :class="{ active: $route.path== '/' }">
                <router-link class="nav-link" to="/">{{ $t('home') }} <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path== '/about' }">
                <router-link class="nav-link" to="/about">{{ $t('about') }}</router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path== '/services' }">
                <router-link class="nav-link" to="/services">{{ $t('services') }}</router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path== '/why' }">
                <router-link class="nav-link" to="/why">{{ $t('why_us') }}</router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path== '/team' }">
                <router-link class="nav-link" to="/team">{{ $t('team') }}</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> {{ $t('login') }}</a>
              </li>
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
            <button @click="switchLanguage" class="btn btn-primary">
              {{ $t('language') }}
            </button>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
</template>
<style scoped></style>