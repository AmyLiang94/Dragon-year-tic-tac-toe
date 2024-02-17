<template>
  <main class="pt-8 text-center dark:bg-red-900 min-h-screen dark:text-white">

    <div class="flex flex-col items-center mb-8 flex-container">
      <div 
        v-for="(row, x) in board" 
        :key="x"
        class="flex">
        <div 
          v-for="(cell, y) in row" 
          :key="y" 
          @click="MakeMove(x, y)" 
          :class="`border-2 border-gold w-24 h-24 hover:bg-gray-700 flex items-center justify-center material-icons-outlined text-4xl cursor-pointer ${cell === 'x' ? 'text-pink-500' : 'text-blue-400'}`">
          <img v-if="cell === 'x'" src="../pics/lion-dance.png" alt="Dragon Icon"> 
          <img v-else-if="cell === 'o'" src="../pics/orange.png" alt="Orange Icon"> 			
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 v-if="winner" class="text-6xl font-bold mb-8">Happy Lunar New Year!</h2>
      <video v-if="showAnimation" controls autoplay class="fullscreen-video transition-rotate-fade">
        <source src="../video/animation7.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <button @click="ResetGame" class="px-4 py-2 bg-pink-500 rounded uppercase font-bold hover:bg-pink-600 duration-300 button-custom">Reset</button>
    </div>
  </main>
</template>

<script>
import { ref, computed, watchEffect } from 'vue';

export default {
  props: {
    playerName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const player = ref('x');
    const board = ref([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    const showAnimation = ref(false);

    const CalculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };

    const winner = computed(() => CalculateWinner(board.value.flat()));

    const MakeMove = (x, y) => {
      if (winner.value) return;

      if (board.value[x][y]) return;

      board.value[x][y] = player.value;

      player.value = player.value === 'x' ? 'o' : 'x';
    };

    const ResetGame = () => {
      board.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      player.value = 'x';
    };

    watchEffect(() => {
      if (winner.value) {
        showAnimation.value = true;
      }
    });

    return {
      board,
      winner,
      MakeMove,
      ResetGame,
      showAnimation
    };
  }
};
</script>

<style scoped>
.fullscreen-video {
  position: fixed;
  top: -20%;
  left: 0;
  width: 140%;
  height: 140%;
  z-index: 9999;
  background-color: bg-red-900; /* Optional: Add a black background */
}

main {
  background-image: url('../pics/GameBackground.png');
  background-size: cover;
  background-position: center;
  }


.transition-rotate-fade {
  animation: rotate-fade-in 0.3s ease-in-out forwards;
}

@keyframes rotate-fade-in {
  from {
    transform: rotate(-180deg);
    opacity: 0;
  }
  to {
    transform: rotate(0);
    opacity: 1;
  }
}

.flex-container {
  margin-top: 200px; /* 根據需要調整數值 */
}

.button-custom {
  font-family: 'Sixtyfour', sans-serif;
}

.border-gold {
  border-image: linear-gradient(to bottom right, #ffd700, #ffa500, #ffd700) 1;
  border-image-slice: 1;
}

</style>