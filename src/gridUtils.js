export const WIDTH = 20;
export const HEIGHT = 23;

const tileToChar = {
  wall: 'x',
  spawn: 'o',
  empty: ' ',
};

const charToTile = Object.entries(tileToChar).reduce((obj, [k, v]) => {
  console.log(obj, v, k);
  obj[v] = k;
  return obj;
}, {});

export function serializeGrid(grid) {
  const reflected = reflectGrid(grid);
  const str = grid
    .map((row, idx) =>
      row
        .concat(reflected[idx])
        .map((tile) => tileToChar[tile])
        .join('')
    )
    .join('\n');
  return str;
}

export function deserializeGrid(str) {
  const tiles = [];
  const lines = str.trim().split('\n');

  for (let y = 0; y < HEIGHT; y += 1) {
    tiles[y] = [];
    for (let x = 0; x < WIDTH; x += 1) {
      const tile = charToTile[lines[y][x]];
      tiles[y][x] = tile;
    }
  }

  return tiles;
}

export function reflectGrid(grid) {
  return grid.map((row) => {
    const refRow = row.slice(0, -1);
    refRow.reverse();
    return refRow;
  });
}
