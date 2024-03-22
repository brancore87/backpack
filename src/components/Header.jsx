import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Counter
        numberOfPackedItems={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
