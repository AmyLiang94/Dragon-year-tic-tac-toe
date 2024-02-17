<template>
  <main class="pt-8 text-center dark:bg-red-900 min-h-screen dark:text-white">
  <div>
    <button @click="submitName" class="submit-button">I am ready</button>
  </div>
    <audio src="../Music/NewYearMusic.mp3" autoplay loop></audio>
  </main>
</template>

<script>
export default{
  data() {
    return {
      name: ''
    }
  },
  methods: {
    submitName() {
      this.$router.push({ name: 'Game', params: { playerName: this.name } })
      .catch( err => {
        console.error('Error navigating to Game.vue', err);
      });
    }
  }
}
</script>

<style scoped>
input {
  color: black;
}

main {
  background-image: url('../pics/2Background.png');
  background-size: cover;
  background-position: center;
  }

.submit-button {
  margin-top: 700px; /* Adjust the value as needed to move the button down */
  padding: 10px 20px;
  background-color: #4CAF50; 
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-family: 'Sixtyfour', sans-serif; /* 使用 Google Fonts 中的 Sixtyfour 字体 */
  cursor: pointer;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
  animation: heartbeat 2s infinite alternate; /* 添加心跳动画 */
}

@keyframes heartbeat {
  from {
    transform: translateX(-10px);
  }
  to {
    transform: translateX(10px);
  }
}

.submit-button:hover {
  background-color: #EF4B4B;
}

.submit-button-mobile-hover {
  background-color: #EF4B4B;
}

@media (max-width: 768px) {
  .submit-button:hover {
    background-color: #45a049;
  }
  .submit-button:hover.submit-button-mobile-hover {
    background-color: #EF4B4B;
  }
}

</style>
