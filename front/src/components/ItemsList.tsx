import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { useTypedSelector } from "../hook/useTypedSelector"
import { fetchItems } from "../store/actions/fetchItems"



const ItemsList: React.FC = () => {
  const state = useTypedSelector(state => state.item)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems())
  }, [])
  console.log(state);

  if (state.loading) return (
    <h1>Грузим</h1>
  )

  if (state.error) return (
    <h1>{state.error}</h1>
  )

  return (
    <div>
      <NavLink to={"/"}> </NavLink >
      {state.items.map((item) =>
        <div key={item.id}>{item.name}</div>
      )}
    </div>
  )
}

export default ItemsList;