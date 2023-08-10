import { ItemTypes } from "../../Constants/itemTypes";
import { useDrag } from "react-dnd";

export function useDraggable() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return { isDragging, drag };
}
