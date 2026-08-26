<script setup>
import { ref, onMounted } from 'vue'

const unifontEnabled = ref(false)
const STORAGE_KEY = 'vitepress-unifont-enabled'

function toggle() {
  unifontEnabled.value = !unifontEnabled.value
  document.documentElement.classList.toggle('use-unifont', unifontEnabled.value)
  localStorage.setItem(STORAGE_KEY, String(unifontEnabled.value))
}

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'true') {
    unifontEnabled.value = true
    document.documentElement.classList.add('use-unifont')
  }
})
</script>

<template>
  <div class="VPNavScreenAppearance unifont-screen-item">
    <span class="text">Unifont</span>
    <button
      class="VPSwitch VPSwitchAppearance unifont-switch"
      type="button"
      role="switch"
      :aria-checked="unifontEnabled"
      @click="toggle"
    >
      <span class="check">
        <span class="icon">
          <span class="unifont-letter">U</span>
        </span>
      </span>
    </button>
  </div>
</template>

<style scoped>
/* 原生移动端容器样式（保持不变） */
.VPNavScreenAppearance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.75rem 0.875rem 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
}
.VPNavScreenAppearance .text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 2;
}

/* 完整复制桌面端 VPSwitch 样式 */
.VPSwitch {
  position: relative;
  border-radius: 0.6875rem;
  display: block;
  width: 2.5rem;
  height: 1.375rem;
  flex-shrink: 0;
  border: 1px solid var(--vp-input-border-color);
  background-color: var(--vp-input-switch-bg-color);
  transition: border-color 0.25s;
  cursor: pointer;
}
.VPSwitch:hover {
  border-color: var(--vp-c-brand-1);
}
.VPSwitch .check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background-color: var(--vp-c-neutral-inverse);
  box-shadow: var(--vp-shadow-1);
  transition: transform 0.25s;
}

/* Unifont 独立滑动 */
.unifont-switch .check {
  transform: translateX(0) !important;
}
.unifont-switch[aria-checked="true"] .check {
  transform: translateX(1.125rem) !important;
}
.unifont-letter {
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.unifont-switch[aria-checked="true"] .unifont-letter {
  color: var(--vp-c-brand);
}
</style>