const Card = ({name, age}: {name: string, age: number}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default Card
