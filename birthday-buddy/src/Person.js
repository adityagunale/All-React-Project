const Person = ( { image, name, age}) => (
    <div className="person">
        <img src={image} alt={name} className="img" />
        <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
)

export default Person;