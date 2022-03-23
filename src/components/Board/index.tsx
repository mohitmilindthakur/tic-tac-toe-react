import "./index.css";
import Tile from './../Tile';
import {action} from './../Game/index'
import React from "react";

interface BoardProps {
    setInput: (inputCell: [number, number], value: string) => void; 
}

const Board: React.FC<BoardProps> = () => {
    return (
        <div className="board">
            <Tile  className="bb" value="X" />
            <Tile  className="bl bb" value="X"/>
            <Tile  className="bl bb" value="X"/>

            <Tile  className="bb" value="X"/>
            <Tile  className="bl bb" value="X"/>
            <Tile  className="bl bb" value="X"/>

            <Tile  className="" value="X"/>
            <Tile  className="bl" value="X"/>
            <Tile  className="bl" value="X"/>
        </div>
    )
}




export default Board;