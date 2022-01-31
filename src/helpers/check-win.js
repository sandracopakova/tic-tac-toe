function checkSequence(seq) {
  return seq === "XXX" || seq === "OOO";
}

function checkColumns(field) {
  for (let x in field) {
    let col = "";
    for (let y in field) {
      col += field[y][x];
    }
    if (checkSequence(col)) {
      return true;
    }
  }
  return false;
}

function checkRows(field) {
  return field.some((row) => {
    return checkSequence(row.join(""));
  });
}

function checkDiagonals(field) {
  let sequence = "";
  for (let x in field) {
    sequence += field[x][x];
  }
  if (checkSequence(sequence)) {
    return true;
  }
  sequence = "";
  for (let x in field) {
    sequence += field[x][2 - x];
  }
  if (checkSequence(sequence)) {
    return true;
  }
  return false;
}

export function checkWin(field) {
  if (checkRows(field)) {
    return true;
  }
  if (checkColumns(field)) {
    return true;
  }
  if (checkDiagonals(field)) {
    return true;
  }
  return false;
}
