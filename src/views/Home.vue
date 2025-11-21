<script>
    import NavigationHeader from '@/components/NavigationHeader.vue';
    import Slider from '@/views/Slider.vue';
    import ServiceBox from '@/views/ServiceBox.vue';
    import WhyData from '@/views/WhyData.vue';
    import TeamData from '@/views/TeamData.vue'; 
    import Clients from '@/components/Clients.vue';
    export default {
        components: {
            NavigationHeader,
            Slider,
            ServiceBox,
            TeamData,
            Clients,
            WhyData
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
            ],
            WhyDataProps: [
                    {
                        title: 'Expert Management',
                        icon: '/images/w1.png',
                        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                    },
                    {
                        title: 'Secure Investment',
                        icon: '/images/w2.png',
                        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                    },
                    {
                        title: 'Instant Trading',
                        icon: '/images/w3.png',
                        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                    },
                    {
                        title: 'Happy Customers',
                        icon: '/images/w4.png',
                        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                    }
                ],
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
        };
        },
    }
</script>
<template>
    <div class="hero_area">

    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="/images/hero-bg.png" alt="">
      </div>
    </div>

    <!-- header section -->
    <NavigationHeader />
    <!-- end header section -->

    <!-- slider section -->
    <Slider />
    <!-- end slider section -->

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

  <!-- about section -->
  <!-- end about section -->

  <!-- why section -->
   <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Why Choose <span>Us</span>
        </h2>   
      </div>
      <div class="why_container">
        <div class="box">
            <WhyData
                v-for="(item, index) in WhyDataProps"
                :key="index"
                :title="item.title"
                :icon="item.icon"
                :description="item.description"
                />
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
  <!-- end why section -->

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


  <!-- client section -->
  <Clients/>
  <!-- end client section -->
    
</template>