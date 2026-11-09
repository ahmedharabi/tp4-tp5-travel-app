function Rating(props) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= props.value) {
      stars.push(<span key={i} className="star full">★</span>)
    } else {
      stars.push(<span key={i} className="star">★</span>)
    }
  }
  return <div>{stars}</div>
}

export default Rating
