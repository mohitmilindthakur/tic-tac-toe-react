import { useReducer, useCallback } from 'react';

import Board from "../Board";



export type inputCell = [number, number];
export type inputs = string[][];

function getAdjacentCells(inputCell: inputCell) {

}

function isGameWon(inputs: string[][]) {
    let isCol1 = inputs[0][0] && inputs[0][0] === inputs[1][0] && inputs[1][0] === inputs[2][0];
    let isCol2 = inputs[0][1] && inputs[0][1] === inputs[1][1] && inputs[1][1] === inputs[2][1];
    let isCol3 = inputs[0][2] && inputs[0][2] === inputs[1][2] && inputs[1][2] === inputs[2][2];

    let isRow1 = inputs[0][0] && inputs[0][0] === inputs[0][1] && inputs[0][1] === inputs[0][2];
    let isRow2 = inputs[1][0] && inputs[1][0] === inputs[1][1] && inputs[1][1] === inputs[1][2];
    let isRow3 = inputs[2][0] && inputs[2][0] === inputs[2][1] && inputs[2][1] === inputs[2][2];

    let isDiag1 = inputs[0][0] && inputs[0][0] === inputs[1][1] && inputs[1][1] === inputs[2][2];
    let isDiag2 = inputs[0][2] && inputs[0][2] === inputs[1][1] && inputs[1][1] === inputs[2][0];

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

    if (isDiag1) {
        return ['diag1', inputs[0][0]];
    }

    if (isDiag2) {
        return ['diag2', inputs[0][2]];
    }

    return false;
}

interface GameState {
    inputs: inputs;
    isGameWon: boolean;
}

const INITIAL_STATE: GameState = {
    inputs: Array(3).fill(Array(3).fill("")),
    isGameWon: false
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

            let won = isGameWon(newState)
            console.log("WON", won);

            return { isGameWon: won ? true : false, inputs: newState };

        default:
            return state;
    }
}

const Game: React.FC = () => {

    let [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    let setInput = useCallback((inputCell: inputCell, value: string) => {
        dispatch({ type: "INPUT", payload: { inputCell, value } })
    }, [])

    return (
        <div>
            {
                !state.isGameWon && (
                    <>
                        <h1>Game</h1>
                        <Board setInput={setInput} inputs={state.inputs} />
                    </>
                )
            }

            {
                state.isGameWon && (
                    <>
                    <h1>Game Won</h1>
                    </>
                )
            }
        </div>
    )
}




export default Game;