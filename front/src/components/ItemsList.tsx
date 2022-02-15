import { useTypedSelector } from "../hook/useTypedSelector"



const ItemsList: React.FC = () => {
  const state = useTypedSelector(state => state.item)

  return (
    <div>

    </div>
  )
}

export default ItemsList;