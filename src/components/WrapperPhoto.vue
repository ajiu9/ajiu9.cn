<script setup lang="ts">
import { formatDate } from '~/logics'

const { frontmatter, date } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
  img: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <iframe src="https://www.datinginfo.top/game/RobotCarTransform/" frameborder="0" width="414" height="832"/>
    <iframe src="https://ams.cdn.arkadiumhosted.com/assets/global/game/webgl-mahjong/?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjong&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUzMTY=?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjong&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUzMTY=" frameborder="0" width="414" height="832"/>

    <!-- <a
      border="~ base rounded-lg" block of-hidden
      class="group"
      rounded-3
      hover="scale-101 shadow-xl z-10 border-0!" transition-all duration-500 bg-base relative
      :href="frontmatter.link"
      target="_blank"
    >
      <img
        v-if="frontmatter.img"
        class="m-0!"
        :src="frontmatter.img"
        w-full autoplay loop muted playsinline border="b base"
      >

      <div class="prose prose-sm p4 m0 pb3">
        <slot />
        <div op50 text-sm pt2>{{ formatDate(date, false) }}</div>
      </div>
    </a> -->
  </div>
</template>
