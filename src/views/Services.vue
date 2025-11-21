<script>
    import NavigationHeader from '@/components/NavigationHeader.vue';
    import ServiceBox from '@/views/ServiceBox.vue';
    export default {
        components: {
            NavigationHeader,
            ServiceBox
        },
        data() {
      return {
        services: [
          {
            title: 'Currency Wallet',
            description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            icon: '/images/s1.png'
          },
          {
            title: 'Security Storage',
            description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            icon: '/images/s2.png'
          },
          {
            title: 'Expert Support',
            description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            icon: '/images/s3.png'
          }
        ]
      };
    },
    }
</script>
<template>

  <div class="sub_page">
    <div class="hero_area">

    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="/images/hero-bg.png" alt="">
      </div>
    </div>

    <!-- header section -->
    <NavigationHeader />
    <!-- end header section -->

    </div>
  </div>
  
    <!-- service section -->
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div class="row">
          <ServiceBox
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
          />
        </div>
        <div class="btn-box">
          <a href="">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end service section -->
</template>
<style scoped></style>