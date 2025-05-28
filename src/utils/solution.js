
function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}

function buildFieldFromState(state) {
  const field = Array.from({ length: 6 }, () => Array(6).fill(null));
  for (const block of state) {
    const { position, size, id } = block;
    for (let r = 0; r < size.height; r++) {
      for (let c = 0; c < size.width; c++) {
        const row = position.row + r;
        const col = position.col + c;
        if (field[row] && field[row][col] !== undefined) {
          field[row][col] = id;
        }
      }
    }
  }
  return field;
}

function serializeState(state) {
  return JSON.stringify(
    state.map(b => ({ id: b.id, row: b.position.row, col: b.position.col }))
  );
}

function isSolved(state) {
  const red = state.find(b => b.id === 'red');
  return red && red.position.col + red.size.width - 1 === 5;
}

function isRedCarPathClear(state) {
  const field = buildFieldFromState(state);
  const red = state.find(b => b.id === 'red');
  const row = red.position.row;
  let col = red.position.col + red.size.width;

  while (col < 6) {
    if (field[row][col] !== null) return false;
    col++;
  }

  return true;
}

function manhattanDistance(state) {
  const red = state.find(b => b.id === 'red');
  return 5 - (red.position.col + red.size.width - 1);
}

function isMoveNeededForMainCar(state, block) {
  const red = state.find(b => b.id === 'red');
  const blockPosition = block.position;

  if (block.orientation === 'horizontal') {
    if (blockPosition.row === red.position.row && 
        (blockPosition.col + block.size.width - 1 < red.position.col || blockPosition.col > red.position.col + red.size.width - 1)) {
      return false;
    }
  } else if (block.orientation === 'vertical') {
    if (blockPosition.col === red.position.col && 
        (blockPosition.row + block.size.height - 1 < red.position.row || blockPosition.row > red.position.row + red.size.height - 1)) {
      return false;
    }
  }

  return true;
}

function generateNextStates(state, allowMultiMoves = true) {
  const nextStates = [];
  const field = buildFieldFromState(state);

  for (const block of state) {
    if (!isMoveNeededForMainCar(state, block)) continue;

    const { id, orientation, position, size } = block;

    if (orientation === 'horizontal') {
      // LEFT
      for (let offset = 1; position.col - offset >= 0; offset++) {
        if (field[position.row][position.col - offset] !== null) break;
        const newState = cloneState(state);
        newState.find(b => b.id === id).position.col -= offset;
        nextStates.push(newState);
        if (!allowMultiMoves) break;
      }

      // RIGHT
      for (let offset = 1; position.col + size.width - 1 + offset <= 5; offset++) {
        if (field[position.row][position.col + size.width - 1 + offset] !== null) break;
        const newState = cloneState(state);
        newState.find(b => b.id === id).position.col += offset;
        nextStates.push(newState);
        if (!allowMultiMoves) break;
      }
    }

    if (orientation === 'vertical') {
      // UP
      for (let offset = 1; position.row - offset >= 0; offset++) {
        if (field[position.row - offset][position.col] !== null) break;
        const newState = cloneState(state);
        newState.find(b => b.id === id).position.row -= offset;
        nextStates.push(newState);
        if (!allowMultiMoves) break;
      }

      // DOWN
      for (let offset = 1; position.row + size.height - 1 + offset <= 5; offset++) {
        if (field[position.row + size.height - 1 + offset][position.col] !== null) break;
        const newState = cloneState(state);
        newState.find(b => b.id === id).position.row += offset;
        nextStates.push(newState);
        if (!allowMultiMoves) break;
      }
    }
  }

  return nextStates;
}

function detectChangedBlock(prevState, currentState) {
  for (const block of currentState) {
    const prev = prevState.find(b => b.id === block.id);
    if (prev &&
      (prev.position.row !== block.position.row ||
       prev.position.col !== block.position.col)) {
      return {
        id: block.id,
        position: { row: block.position.row, col: block.position.col }
      };
    }
  }
  return null;
}

function findPathForMainCar(initialState, minSteps = 9, maxSteps = 100) {
  if (!Array.isArray(initialState) || initialState.length === 0) {
    console.error("Invalid or empty initialState");
    return { solutionSteps: [], stepsCount: 0 };
  }

  if (isSolved(initialState) || isRedCarPathClear(initialState)) {
    return { solutionSteps: [], stepsCount: 0 };
  }

  const queue = [{ state: initialState, steps: [], cost: 0 }];
  const visited = new Set();
  visited.add(serializeState(initialState));

  while (queue.length > 0) {
    queue.sort((a, b) =>
      (a.cost + manhattanDistance(a.state)) -
      (b.cost + manhattanDistance(b.state))
    );
    const current = queue.shift();

    if (isSolved(current.state)) {
      if (current.steps.length >= minSteps &&
          current.steps.length <= maxSteps &&
          current.steps.length > 0 &&
          current.steps[current.steps.length - 1].id === 'red') {
        return {
          solutionSteps: current.steps,
          stepsCount: current.steps.length
        };
      }
    }

    if (current.steps.length > maxSteps) continue;

    const nextStates = generateNextStates(current.state);

    for (const nextState of nextStates) {
      const key = serializeState(nextState);
      if (visited.has(key)) continue;

      const changed = detectChangedBlock(current.state, nextState);
      if (!changed) continue;

      visited.add(key);
      queue.push({
        state: nextState,
        steps: [...current.steps, changed],
        cost: current.cost + 1
      });
    }
  }

  return { solutionSteps: [], stepsCount: 0 };
}

export { findPathForMainCar };