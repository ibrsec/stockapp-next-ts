import React, { ReactNode } from 'react'
import Drawer from './components/Drawer'
 
const layout = ({children}:{children:ReactNode}) => {
  return (
    <div> 
      <Drawer />
        {children}
 
    </div>
  )
}

export default layout