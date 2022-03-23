import "./index.css";
import Tile from './../Tile';
import {action} from './../Game/index'
import React from "react";

interface BoardProps {
    setInput: (inputCell: [number, number], value: string) => void;
    inputs: string[][];
}

const classNames = [['bb', 'bl bb', 'bl bb'], ['bb', 'bl bb', 'bl bb'], ['', 'bl', 'bl']]

const Board: React.FC<BoardProps> = (props) => {
    const onClick = (rowIndex: number, cellIndex: number) => {
        console.log("CLICKED")
        props.setInput([rowIndex, cellIndex], 'X')
    }


    return (
        <div className="board">

            {
                props.inputs.map((row, rowIndex) => {
                    return (
                        row.map((cell, cellIndex) => (
                            <Tile onClick={() => onClick(rowIndex, cellIndex)} key={`${rowIndex}-${cellIndex}`} className={classNames[rowIndex][cellIndex]} value={cell} rowIndex={rowIndex} cellIndex={cellIndex} />
                        ))
                    )
                })
            }
        </div>
    )
}




export default Board;