import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectDiamonds, selectUpdate, getDiamondsAsync, addDiamondAsync, delDiamondAsync,updDiamondAsync} from './diamondSlice';

const Diamond = () => {
  const diamonds = useAppSelector(selectDiamonds);
  const diamondUpdate = useAppSelector(selectUpdate)
  const dispatch = useAppDispatch();
  const [carat, setcarat] = useState(0)
  const [cut, setcut] = useState("")
  const [color, setcolor] = useState("")
  const [clarity, setclarity] = useState("")
  const [depth, setdepth] = useState(0)
  const [table, settable] = useState(0)
  const [price, setprice] = useState(0)
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)
  const [z, setz] = useState(0)

  useEffect(() => {
    console.table(diamonds)
  }, [diamonds])



  useEffect(() => {
    dispatch(getDiamondsAsync())
  }, [diamondUpdate])


  return (
    <div>
      <h1>Add/Update Diamond Fields:</h1>
      carat - <input onChange={(e) => setcarat(+e.target.value)}/><br/>
      cut - <input onChange={(e) => setcut(e.target.value)}/><br/> 
      color - <input onChange={(e) => setcolor(e.target.value)}/><br/>
      clarity - <input onChange={(e) => setclarity(e.target.value)}/><br/>
      depth - <input onChange={(e) => setdepth(+e.target.value)}/><br/>
      table - <input onChange={(e) => settable(+e.target.value)}/><br/> 
      price - <input onChange={(e) => setprice(+e.target.value)}/><br/>
      x - <input onChange={(e) => setx(+e.target.value)}/> <br/> 
      y - <input onChange={(e) => sety(+e.target.value)}/><br/>
      z - <input onChange={(e) => setz(+e.target.value)}/><br/>
      <button onClick={() => dispatch(addDiamondAsync({carat, cut, color, clarity, depth, table, price, x, y, z }))}>add diamond</button> 
      
      <hr />
      <h1>All Diamonds</h1>
      {diamonds.map((yahalom, i) =>
        <div key={i}>
          
          carat -  {yahalom.carat}<br/>
          cut - {yahalom.cut}<br/> 
          color - {yahalom.color}<br />
          clarity - {yahalom.clarity}<br/>
          depth - {yahalom.depth}<br/>
          table - {yahalom.table},<br/> 
          price - {yahalom.price}<br/>
          x - {yahalom.x}<br/>
          y - {yahalom.y}<br/>
          z - {yahalom.z}<br/>
          {yahalom.ID}
          <button onClick={() => dispatch(updDiamondAsync({ID:yahalom.ID,carat, cut, color, clarity, depth, table, price, x, y, z}))}>update</button>
          <button onClick={() => dispatch(delDiamondAsync(yahalom.ID))}>delete</button>
          <hr />
        </div>)}




    </div>
  )
}

export default Diamond