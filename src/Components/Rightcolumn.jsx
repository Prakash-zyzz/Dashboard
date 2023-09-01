import React from 'react'
import Salesitem from './Salesitem'

import Scorelist from './Scorelist'
import Webanalyticscomp from './Webanalyticscomp'

const Rightcolumn = () => {
  return (
    <div className='w-full p-2'>
      <Salesitem />
      <Webanalyticscomp />
      <Scorelist />
    </div>
  )
}

export default Rightcolumn