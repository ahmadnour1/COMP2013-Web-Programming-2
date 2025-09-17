export default function Card(props){
    return (
    <div className="Card-Components">
        <img src={props.image} alt="" width="200px"/>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
    </div>
    );
}