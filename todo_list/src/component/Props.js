function Props(props) {
  console.log(props);
  const Object = {
    id: 1,
    name: "양해정",
    age: 30,
    context: "I'm a fucking 30years old!!",
  };
  return (
    <div>
      <h1>양해정</h1>
      <p>{Object.context}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default Props;
