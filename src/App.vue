<template>
  <div>
    <grid :grid="grid" @cell-click="handleClickCell" />

    <div>
      <button @click="load">load</button>
      <button @click="save">save</button>
      <textarea ref="saveLoadInput" />
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

textarea {
  font-family: monospace;
}
</style>

<script>
import { WIDTH, HEIGHT, serializeGrid, deserializeGrid } from './gridUtils';
import Grid from './Grid';

const initialGrid = [];

for (let i = 0; i < HEIGHT; i += 1) {
  const row = [];
  for (let j = 0; j < WIDTH; j += 1) {
    row.push('empty');
  }
  initialGrid.push(row);
}

export default {
  data: () => ({
    grid: initialGrid,
  }),

  methods: {
    save() {
      const serialized = serializeGrid(this.grid);
      const input = this.$refs.saveLoadInput;
      input.value = serialized;
    },
    load() {
      const input = this.$refs.saveLoadInput;
      this.grid = deserializeGrid(input.value);
    },
    handleClickCell({ x, y }) {
      this.setCell(x, y, 'wall');
    },
    setCell(x, y, value) {
      if (this.grid[y][x] === value) {
        value = 'empty';
      }
      // this.grid[y][x] = value;
      this.grid[y].splice(x, 1, value);
    },
  },

  components: { Grid },
};
</script>
