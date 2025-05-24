function MovieCard({ title, description, image, rating }) {
    const ratingClass = "text-bg-danger";
  return (
    <>
      <div className="card" style={{ width: '18rem', margin: '20px'}}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text"> {description} </p>
          <p className="card-text"> 
                <span className={`badge rounded-pill ${ratingClass}`}> {rating}/10</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
