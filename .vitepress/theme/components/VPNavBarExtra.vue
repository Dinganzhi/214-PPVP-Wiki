<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { isDark, theme } = useData()

const showMenu = ref(false)
const unifontEnabled = ref(false)
const STORAGE_KEY = 'vitepress-unifont-enabled'

function toggleDark() {
  isDark.value = !isDark.value
}

function toggleUnifont() {
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

// 水平三点 SVG
const moreIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/></svg>`
</script>

<template>
  <div class="VPNavBarExtra">
    <button
      class="VPNavBarExtraButton"
      @click="showMenu = !showMenu"
      :aria-label="theme.extraMenuLabel || '更多选项'"
      v-html="moreIcon"
    />

    <div v-if="showMenu" class="VPNavBarExtraMenu">
      <div class="group">
        <!-- 切换主题 -->
        <div class="item">
          <span class="text">{{ theme.darkModeSwitchLabel || '切换主题' }}</span>
          <button
            class="VPSwitch VPSwitchAppearance"
            type="button"
            role="switch"
            :aria-checked="isDark"
            @click="toggleDark"
          >
            <span class="check">
              <span class="icon">
                <span class="vpi-sun sun" aria-hidden="true" />
                <span class="vpi-moon moon" aria-hidden="true" />
              </span>
            </span>
          </button>
        </div>

        <div class="divider" />

        <!-- Unifont -->
        <div class="item">
          <span class="text">Unifont</span>
          <button
            class="VPSwitch VPSwitchAppearance unifont-switch"
            type="button"
            role="switch"
            :aria-checked="unifontEnabled"
            @click="toggleUnifont"
          >
            <span class="check">
              <span class="icon">
                <span class="unifont-letter">U</span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 菜单容器样式（略，与之前相同，保证布局） */
.VPNavBarExtra {
  position: relative;
  display: none;
  margin-right: -0.75rem;
}
@media (min-width: 48rem) {
  .VPNavBarExtra {
    display: block;
  }
}
.VPNavBarExtraButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.25s;
  padding: 0;
}
.VPNavBarExtraButton:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}
.VPNavBarExtraButton svg {
  display: block;
}
.VPNavBarExtraMenu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  min-width: 11rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  padding: 4px 0;
  z-index: 100;
}
.group {
  padding: 4px 0;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  gap: 1rem;
  min-width: 11rem;
}
.text {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 2.2857143;
  color: var(--vp-c-text-2);
}
.divider {
  border-top: 1px solid var(--vp-c-divider);
  margin: 4px 16px;
}

/* ===== VPSwitch 核心样式（保证过渡） ===== */
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
  transition: transform 0.25s !important; /* 强制过渡 */
}
.VPSwitch .icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  overflow: hidden;
}
/* 原生图标类 */
.VPSwitch .icon .vpi-sun,
.VPSwitch .icon .vpi-moon {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 0.75rem;
  height: 0.75rem;
  color: var(--vp-c-text-2);
}
.VPSwitch .icon .sun { opacity: 1; }
.VPSwitch .icon .moon { opacity: 0; }
.dark .VPSwitch .icon .sun { opacity: 0; }
.dark .VPSwitch .icon .moon { opacity: 1; }

/* 主题开关滑动 */
.dark .VPSwitchAppearance .check {
  transform: translateX(1.125rem);
}

/* ===== Unifont 独立滑动（不受 .dark 影响） ===== */
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