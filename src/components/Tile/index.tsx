import "./index.css";



interface TileProps {
    className: string;
    value: 'x' | 'o' | 'X' | 'Y' | string;
    rowIndex: number;
    cellIndex: number;
    onClick: () => void;
}



const Tile: React.FC<TileProps> = (props) => {
    return (
        <div className={`${props.className} tile`} onClick={props.onClick}>
            <span>{props.value}</span>
        </div>
    )
}




export default Tile;