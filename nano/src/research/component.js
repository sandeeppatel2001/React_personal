const Componect = (props) => {
  const concepts = props.concepts;
  return (
    <li className="concept">
      <img src={concepts.image} alt="TODO: TITLE" />
      <h2>{concepts.title}</h2>
      <p>{concepts.description}</p>
    </li>
  );
};
export { Componect };
