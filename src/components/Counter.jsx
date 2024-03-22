export default function Counter({ totalNumberOfItems, numberOfPackedItems }) {
  return (
    <div>
      <b>{numberOfPackedItems}</b>/{totalNumberOfItems} items packed
    </div>
  );
}
