import { useReducer, useCallback } from 'react';

import Board from "../Board";



export type inputCell = [number, number];
export type inputs = string[][];

function getAdjacentCells(inputCell: inputCell) {

}

function isGameWon(inputCell: inputCell, inputs: string[][]) {
    let isCol1 = inputs[0][0] && inputs[0][0] === inputs[1][0] && inputs[1][0] === inputs[2][0];
    let isCol2 = inputs[0][1] && inputs[0][1] === inputs[1][1] && inputs[1][1] === inputs[2][1];
    let isCol3 = inputs[0][2] && inputs[0][2] === inputs[1][2] && inputs[1][2] === inputs[2][2];

    let isRow1 = inputs[0][0] && inputs[0][0] === inputs[0][1] && inputs[0][1] === inputs[0][2];
    let isRow2 = inputs[1][0] && inputs[1][0] === inputs[1][1] && inputs[1][1] === inputs[1][2];
    let isRow3 = inputs[2][0] && inputs[2][0] === inputs[2][1] && inputs[2][1] === inputs[2][2];

    if (isCol1) {
        return ['col1', inputs[0][0]];
    }

    if (isCol2) {
        return ['col2', inputs[0][1]];
    }

    if (isCol3) {
        return ['col3', inputs[0][2]];
    }



    if (isRow1) {
        return ['row1', inputs[0][0]];
    }

    if (isRow2) {
        return ['row2', inputs[1][0]];
    }

    if (isRow3) {
        return ['row3', inputs[2][0]];
    }
}

interface GameState {
    inputs: inputs;
}

const INITIAL_STATE: GameState = {
    inputs: Array(3).fill(Array(3).fill(""))
}

export interface action {
    type: "INPUT",
    payload: {
        inputCell: [number, number];
        value: string;
    }
}

const reducer = (state: GameState, action: action): GameState => {
    switch (action.type) {
        case "INPUT":
            let newState = JSON.parse(JSON.stringify(state.inputs))
            let [x, y] = action.payload.inputCell;
            newState[x][y] = action.payload.value;

            return newState;

        default:
            return state;
    }
}

const Game: React.FC = () => {

    let [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    let setInput = useCallback((inputCell: inputCell, value: string) => {
        dispatch({type: "INPUT", payload: {inputCell, value}})
    }, [])

    return (
        <div>
            <h1>Game</h1>
            <Board  setInput={setInput} />
        </div>
    )
}




export default Game;