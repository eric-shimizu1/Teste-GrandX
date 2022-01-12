<template>
  <div class="my-2">
    <v-btn
        large
        fab
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'CircleButton',
  props: {
    icon: {
      Type: String
    }
  }
}
</script>