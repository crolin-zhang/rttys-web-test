<script setup>
// This view now acts as a "page builder", composing sections together.
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
</script>

<template>
  <!-- The main layout container is now handled globally or in each section -->
  <HeroSection />
  <FeaturesSection />

  <!-- You can add more sections here in the future -->
  <!-- e.g., <GetStartedSection /> -->
  <!-- e.g., <TestimonialsSection /> -->
</template>

<style>
/* 
  We removed all old styles from here. 
  Styling is now handled within each component's <style scoped> block.
  This makes the code much cleaner and easier to maintain.
*/
</style>
