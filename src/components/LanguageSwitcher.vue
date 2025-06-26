<template>
  <div class="language-switcher" ref="switcher">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <span class="current-lang">{{ currentLangText }}</span>
      <span class="arrow" :class="{ 'up': isOpen }"></span>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li @click="setLocale('en')">English</li>
      <li @click="setLocale('zh')">简体中文</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const isOpen = ref(false);
const switcher = ref(null);

const currentLangText = computed(() => {
  return locale.value === 'zh' ? '中' : 'EN';
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const setLocale = (newLocale) => {
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (switcher.value && !switcher.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.language-switcher {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  cursor: pointer;
  font-weight: 500;
}

.current-lang {
  font-size: 0.9rem;
}

.arrow {
  border: solid var(--color-text);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.2s;
}

.arrow.up {
  transform: rotate(-135deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  min-width: 120px;
  z-index: 20;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.dropdown-menu li:hover {
  background-color: var(--color-card-bg);
}
</style>
