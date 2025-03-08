import "./card.css";

function Card({data}) {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <div>
        <h2>{data.title}</h2>
        <span>{data.author}</span>
        <p>
           {data.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
