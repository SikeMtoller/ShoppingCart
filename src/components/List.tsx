import React from 'react'
import {Product} from "../interfaces/i_product";
import Item from "../components/Item";
interface Props {
    list: Product[];
}

function List({list}:Props) {
  return (<>
  {list.map((product)=> {
      return <Item product={product}></Item>
  })}
  </>
    
  )
}

export default List