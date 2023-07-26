import React from 'react'
import ShoeItem from './ShoeItem'

function ShoesList(props) {
const {dataShoes} = props
        
  return (
    <>
    { dataShoes.map(shoe => {
        return (
            <ShoeItem shoe={shoe}/>
        )
    })}
    </>
   )

}

export default ShoesList