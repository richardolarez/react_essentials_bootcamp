interface PostProps {
  image: string;
  name: string;
  setSelectedPostName: Function;
}

function Post({ image, name, setSelectedPostName }: PostProps) {
  return (
    <li className="post-component">
      <button onClick={() => setSelectedPostName(name)}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </button>
    </li>
  );
}
export default Post;
