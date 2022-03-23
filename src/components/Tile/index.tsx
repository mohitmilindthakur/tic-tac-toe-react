import "./index.css";



interface TileProps {
    className: string;
    value: 'x' | 'o' | 'X' | 'Y';
}



const Tile: React.FC<TileProps> = (props) => {
    return (
        <div className={`${props.className} tile`}>
            <span>{props.value}</span>
        </div>
    )
}




export default Tile;