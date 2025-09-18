export default function Card(props) {
  return (
    <div className="Card-Components">
      <img src={props.image} alt="" width="150px"/>
      <h2>{props.name}</h2>
      <h3>{props.hotel}</h3>
      <p className={props.rating >= 4.0 ? "rating-green" : "rating-red"}>
        {props.rating} ★
      </p>
      <p>{props.price}/night</p>
    </div>
  );
}
