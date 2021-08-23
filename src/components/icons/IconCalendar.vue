<template>
  <svg :width="width" :height="height" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
  <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <path d="M410.7,87.2h-42.2V41.5c0-5.8-4.7-10.5-10.5-10.5h-35.2c-5.8,0-10.5,4.7-10.5,10.5v45.7H199.8V41.5
        c0-5.8-4.7-10.5-10.5-10.5H154c-5.8,0-10.5,4.7-10.5,10.5v45.7h-42.2c-23.3,0-42.2,18.9-42.2,42.2v309.4
        c0,23.3,18.9,42.2,42.2,42.2h309.4c23.3,0,42.2-18.9,42.2-42.2V129.4C452.9,106.1,434,87.2,410.7,87.2z M405.4,438.8H106.6
        c-2.9,0-5.3-2.4-5.3-5.3V171.6h309.4v261.9C410.7,436.5,408.3,438.8,405.4,438.8z M359,262.5L233.9,386.5
        c-4.1,4.1-10.8,4.1-14.9-0.1l-66-66.5c-4.1-4.1-4.1-10.8,0.1-14.9l20-19.8c4.1-4.1,10.8-4.1,14.9,0.1l38.8,39.1l97.6-96.8
        c4.1-4.1,10.8-4.1,14.9,0.1l19.8,20C363.1,251.7,363.1,258.4,359,262.5L359,262.5z"/>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'Iconcalendar',
  props: {
    iconName: {
      type: String,
      default: 'calendar',
    },
    iconColor: {
      type: String,
      default: '#f77d24',
    },
    width: {
      type: [Number, String],
      default: 14,
    },
    height: {
      type: [Number, String],
      default: 14,
    },
  },
};
</script>
