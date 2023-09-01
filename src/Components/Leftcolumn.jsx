import React from 'react'
import Carditems from './Carditems'
import Areachartcomponent from './Areachartcomponent'
import Tablesdash from './Tablesdash'






const Leftcolumn = () => {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
          <Carditems />
          <Carditems />
          <Carditems />
      </div>

      <div className='flex-auto w-full'>
        <Areachartcomponent />
        <Tablesdash />
      </div>
    </div>
  )
}

export default Leftcolumn