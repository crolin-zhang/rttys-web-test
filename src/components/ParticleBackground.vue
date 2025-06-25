<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="particleOptions"
    class="particle-background"
  />
</template>

<script setup>
import { computed } from 'vue';
import { loadFull } from 'tsparticles';

const props = defineProps({
  color: {
    type: String,
    default: '#888888'
  }
});

const particlesInit = async (engine) => {
  await loadFull(engine);
};

// Particle options now use the color prop
const particleOptions = computed(() => ({
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: props.color, // Dynamic color
    },
    links: {
      color: props.color, // Dynamic color
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
}));
</script>

<style scoped>
.particle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Set to -1 to be absolutely in the background */
}
</style>
