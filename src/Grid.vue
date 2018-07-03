<template>
  <div>
    <div class="grid-container">
      <table class="grid">
        <tr v-for="(row, y) in grid" :key="y">
          <td v-for="(item, x) in row" :key="x"
            @mouseover="mouseOverCell(x, y)"
            @click="clickCell(x, y)"
            :class="[item]">
          </td>
        </tr>
      </table>
      <table class="grid reflected">
        <tr v-for="(row, y) in reflectedGrid" :key="y">
          <td v-for="(item, x) in row" :key="x"
            @mouseover="mouseOverReflectedCell(x, y)"
            @click="clickReflectedCell(x, y)"
            :class="[item]">
          </td>
        </tr>
      </table>
    </div>
    <div class="status">
      <span v-if="hoveredCell">
        x: {{hoveredCell.x + 1}} y: {{hoveredCell.y + 1}}
      </span>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: flex;
}

table.grid {
  flex: 0 0 auto;
  border: 0;
  padding: 0;
  margin: 0;
  border-spacing: 0px;
  border-collapse: collapse;
}

tr {
  padding: 0;
  margin: 0;
}

td {
  border: 1px solid gray;
  width: 24px;
  height: 24px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

/* table.reflected td {
  border: 1px solid gray;
} */

td.wall {
  background: black;
}

td.spawn {
  background: red;
}
</style>

<script>
import { WIDTH, reflectGrid } from './gridUtils';

export default {
  props: ['grid'],
  computed: {
    reflectedGrid() {
      return reflectGrid(this.grid);
    },
  },
  data: () => ({
    hoveredCell: null,
  }),
  methods: {
    clickCell(x, y) {
      this.$emit('cell-click', { x, y });
    },
    clickReflectedCell(rx, y) {
      const x = WIDTH - rx - 2;
      this.clickCell(x, y);
    },
    mouseOverCell(x, y) {
      this.hoveredCell = { x, y };
    },
    mouseOverReflectedCell(x, y) {
      this.hoveredCell = { x: WIDTH + x, y };
    },
  },
};
</script>
