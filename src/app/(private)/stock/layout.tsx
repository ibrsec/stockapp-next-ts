import React, { ReactNode } from 'react'

import Navbar from '../../../components/Navbar';
const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar >
        {children}

        </Navbar>
    </div>
  )
}

export default layout