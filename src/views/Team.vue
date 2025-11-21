<script>
    import NavigationHeader from '@/components/NavigationHeader.vue';
    import TeamData from '@/views/TeamData.vue';
    export default {
        components: {
            NavigationHeader,
            TeamData
        },
        data() {
            return {
                TeamDataProps: [
                    {
                        image: '/images/team-2.jpg',
                        name: 'Williamson',
                        position: 'Founder & CEO'
                    },              
                    {
                        image: '/images/team-2.jpg',
                        name: 'Sophia',
                        position: 'Marketing Head'
                    },              
                    {
                        image: '/images/team-3.jpg',
                        name: 'James',
                        position: 'Lead Developer'
                    },              
                    {
                        image: '/images/team-4.jpg',
                        name: 'Olivia',
                        position: 'UI/UX Designer'
                    }
                ]
            }
        }
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

    <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          
            <TeamData
                v-for="(item, index) in TeamDataProps"
                :key="index"
                :image="item.image"
                :name="item.name"
                :position="item.position"
                />
          </div>
        </div>
      </div>
  </section>
  <!-- end team section -->
</template>
<style scoped></style>