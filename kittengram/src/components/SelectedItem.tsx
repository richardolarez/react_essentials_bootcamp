interface SelectedItemProps {
  image: string | undefined;
  name: string | undefined;
}

function SelectedItem({ image, name }: SelectedItemProps) {
  return (
    <div className="selected-item">
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
}
export default SelectedItem;
