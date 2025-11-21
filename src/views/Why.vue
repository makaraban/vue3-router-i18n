<script>
    import NavigationHeader from '@/components/NavigationHeader.vue'; 
    import WhyData from '@/views/WhyData.vue';
    export default {
        components: {
            NavigationHeader,
            WhyData
        },
        data() {
            return {
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
   
</template>
<style scoped></style>