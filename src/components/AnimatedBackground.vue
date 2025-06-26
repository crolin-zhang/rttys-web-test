<template>
  <div class="animated-background"></div>
</template>

<style scoped>
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.animated-background::before,
.animated-background::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%; /* Make it large to avoid edges showing during rotation */
  height: 300%;
  transform-origin: center center;
  filter: blur(150px); /* This creates the soft, diffused look */
}

.animated-background::before {
  background: conic-gradient(
    from 0deg,
    #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000,
    #ff0000 10%, #ff7f00 20%, #ffff00 30%, #00ff00 40%, #0000ff 50%, #4b0082 60%, #8b00ff 70%, #ff0000 80%
  );
  animation: rotate 10s linear infinite;
  opacity: 0.3; /* Adjust for desired intensity */
}

.animated-background::after {
  background: conic-gradient(
    from 180deg,
    #00ffff, #0000ff, #8a2be2, #ff00ff, #ff1493, #ff4500, #ffd700, #00ffff,
    #00ffff 10%, #0000ff 20%, #8a2be2 30%, #ff00ff 40%, #ff1493 50%, #ff4500 60%, #ffd700 70%, #00ffff 80%
  );
  animation: rotate-reverse 15s linear infinite;
  opacity: 0.2; /* Adjust for desired intensity */
}

@keyframes rotate-reverse {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
