const MovieCard = ({ title, imgUrl, rate = null, id, overview = '' }) => {
  console.log('title: ', title);
  const createImageUrl = finalPath => {
    return `https://image.tmdb.org/t/p/w200${imgUrl}`;
  };
  return (
    <div>
      <img src={createImageUrl()} alt="" />
      <b>{title}</b>
    </div>
  );
};
export default MovieCard;
