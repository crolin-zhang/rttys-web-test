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
      value: 'transparent'
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab'
      },
      onClick: {
        enable: false
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 1,
          color: props.color
        }
      }
    }
  },
  particles: {
    color: {
      value: props.color
    },
    links: {
      color: props.color,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: true,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
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
