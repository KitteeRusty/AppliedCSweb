<script setup lang="ts">
import { ref } from 'vue'
import {
  NButton, NIcon, NImage, NGrid, NGi, NEllipsis, NFloatButton, NTimeline, NTimelineItem
} from 'naive-ui';
import router from '../../router/router';

const contentRef = ref<string | null>(null);

// defineProps<{ msg: string }>()

// const count = ref(0)

initial();

function initial() {
  contentRef.value = "1";
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
}

var text_index = ref(2);

</script>

<template>
  <div class="background">
    <div style="text-align: center; padding-bottom: 40px;">
      <img style="max-width: 720px;" src="/AppliedCSweb/images/logo2.png" alt="" :z-index="2">
      <div style="text-align: center;" :z-index="1"><n-button round
          style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
          @click="router.push({ name: 'contacts' })">
          <x
            style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            Join
            Us </x><n-icon style="padding: 8px;"><svg xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                fill="currentColor"></path>
            </svg></n-icon>
        </n-button></div>
    </div>
    <div style="text-align: center;">_____________________________________________________</div>
    <div class="heading">Who are we?</div>
    <div style="text-align: center;">
      <div><n-image width="200" src="/AppliedCSweb/images/logo1.png"></n-image></div>
    </div>
    <div style="text-align: center;">
      <n-ellipsis :tooltip="false" expand-trigger="click" :line-clamp="3"
        style="color: darkviolet; max-width: 600px; text-align: center;"> <b>AppliedCS Club</b>
        is dedicated to making computer science a
        practical and integral part of various fields. Our mission is to explore and demonstrate how computer science
        can
        be applied beyond traditional boundaries by integrating it with other subjects. We focus on bridging the gap
        between theoretical knowledge and real-world applications, encouraging members to collaborate on
        interdisciplinary
        projects that combine computer science with areas such as physic, economic, and social studies. By
        fostering hands-on experience and innovative thinking, we aim to showcase the versatility of computer science
        and
        its potential to solve complex, real-world problems. Join us to be part of a community that is passionate about
        applying technology in meaningful and impactful ways.
      </n-ellipsis>
    </div>
    <div style="text-align: center; padding: 30px; padding-left: 64px; padding-right: 64px;">
      <n-grid x-gap="12" :cols="3">
        <n-gi class="card">
          <div class="subheading" style="color: #B30024;">Independent Project</div>
          <div class="description" style="color: #B30024;">At AppliedCS Club, we offer a unique opportunity for members
            to dive into <b>Independent
              Projects</b>, allowing you to explore <b>your passions</b> and create solutions tailored to your
            interests. Whether which subject you plan to major, you can have your own project: If you are interested in
            Economic, you can learn to make a website that analyze trends; If you are a History student, you may learn
            to make a history website that gather and display history information for internet. In
            the end, we will build up your <b>website</b> to show your passion and
            <b>display your knowledge</b>. Join
            us to <b>harness your creativity</b>, work on impactful projects, and <b>collaborate</b> with peers who
            share your
            enthusiasm.
          </div>
        </n-gi>
        <n-gi class="card">
          <div class="subheading" style="color: #0301FF;">Practical & Applicable</div>
          <div class="description" style="color: #0301FF;"> <b>Unlike traditional theoretical clubs</b> that focus
            primarily on
            lectures, AppliedCS
            Club stands out with our emphasis on Applicable Projects. We prioritize hands-on, practical application of
            knowledge, allowing members to work on projects that address <b>real-world challenges</b>. This approach
            bridges the gap between theory and practice, offering a <b>tangible</b> way to
            apply what
            you’ve learned. By engaging in projects with direct relevance to your expertise, this distinguish us from
            conventional lecture-based clubs. Even if
            you aren't a CS major student, it is also valuable for you to display your
            knowledge on the subject as it is meant to be <b>applicable</b>. Join us to
            transform theoretical concepts into practical solutions and see your ideas come to life.</div>
        </n-gi>
        <n-gi class="card">
          <div class="subheading" style="color: #177D02;">Application-Boosting Experience</div>
          <div class="description" style="color: #177D02;">As this is the second semester of our relatively new ECA,
            AppliedCS Club offers <b>abundant</b> opportunities for growth and involvement. Joining us now allows you to
            be
            part of shaping the club's future and position yourself as a <b>potential future leader</b>. Additionally,
            contributing to and developing projects like our website is a valuable way to
            demonstrate your expertise and knowledge in your subject, which will be <b>highly beneficial for your
              future university applications</b>. Be part of our evolving journey, enhance your leadership skills, and
            showcase your accomplishments to stand out in your academic pursuits.</div>
        </n-gi>
      </n-grid>
    </div>
    <div style="text-align: center;">_____________________________________________________</div>
    <div class="heading">Curriculum</div>
    <div style="text-align: center; justify-content: center; color: grey; font-size: 12px;">(Click on the word to view
      curriculum for each semester)</div>
    <div style="text-align: center; display: flex; justify-content: center;">
      <div style="overflow: auto;">
        <n-timeline horizontal size="large" style="text-align: center;">
          <n-timeline-item class="timeline-item" title="AppliedCS Club is founded" content="The first attempt"
            time="2023-2024 Semester 2" @click="text_index = 1" />
          <n-timeline-item class="timeline-item" title="Replanning the curriculum"
            content="People aren't interested in the topic last semester" time="2024-2025 Semester 1"
            @click="text_index = 2" />
          <n-timeline-item class="timeline-item" time="future">
            <x style="font-size: 22px;">Waiting for you!</x>
          </n-timeline-item>
        </n-timeline>
      </div>
    </div>
    <div v-if="text_index === 1" style="text-align: center; justify-content: center; padding: 50px;">
      <div style="font-size: 14px; color: grey; text-align: center; justify-content: center;">In the 2023-2024 semester
        2, we have <x style="color: black;">15</x> members</div>
      <div style="text-align: center; display: flex; justify-content: center;">
        <br>
        <x>We organized lectures about: </x><br>

      </div>
      <n-image width="400px" src="/AppliedCSweb/images/wordcloud.png" />

    </div>
    <div v-if="text_index === 2" style="text-align: center; justify-content: center; padding: 50px; display: flex;">
      <n-grid :cols="3">
        <n-gi class="card" style="color: midnightblue;">
          <div class="subheading">Week 1-4: Introductory Lessons</div>
          <div class="description">
            Week 1: Introduction to the club <br>
            Week 2 - 4: Lectures about specific subjects <br>
            -Humanity <br>
            -Science <br>
            -Economic </div>
        </n-gi>
        <n-gi class="card" style="color:indigo;">
          <div class="subheading" style="font-size: 16px;">Week 5 - 7: Tools you can use for your subject </div>
          <div class="description">
            -AI & Machine Learning <br>
            -Crawler <br>
            -Other
          </div>
        </n-gi>
        <n-gi class="card" style="color: darkred;">
          <div class="subheading" style="font-size: 16px;">Week 7 - 14: Final Project </div>
          <div class="description">
            Lessons to build up our own website to show our outcome. Everyone will build their own project (can also
            work in groups)
          </div>
        </n-gi>
      </n-grid>
    </div>
    <n-float-button :right="30" :bottom="80" @click="scrollToTop">
      <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512">
          <path
            d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4l96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
            fill="currentColor"></path>
        </svg></n-icon>
    </n-float-button>
  </div>
</template>

<style>
.background {
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}

.heading {
  text-align: center;
  font-size: 32px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: firebrick;
  border-top: 1px solid 50%;
}

p {
  color: darkviolet;
  max-width: 1000px;
  text-align: center !important;
  margin: 0 auto;

}

.card {
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--boxShadow-light);

  &:hover {
    box-shadow: var(--boxShadow-regular)
  }
}

.timeline-item {
  cursor: pointer;
}

.subheading {
  text-align: left;
  font-weight: bold;
  font-size: 18px;
}

.description {
  text-align: left;
  font-size: 14px;
}

b {
  background-color: #a6c1ee;
}

x {
  font-weight: bold;
}


.container {
  max-width: 800px;
  padding: 20px;
  border-radius: 8px;
  border-color: bisque;
}

h1 {
  text-align: center;
  color: #007bff;
}

.schedule {
  margin: 20px 0;
}

.week {
  margin-bottom: 15px;
}

.week h2 {
  font-size: 18px;
  color: #333;
}

.week ul {
  list-style-type: disc;
  margin-left: 20px;
}

.week ul li {
  margin-bottom: 5px;
}
</style>