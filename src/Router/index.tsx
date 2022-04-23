import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

function Router() {
    const [logged_in, set_logged_in] = useState<boolean>(true)
  return (
    <BrowserRouter>
        {logged_in ? (
            <></>
        ): (
            <></>
        )}
    </BrowserRouter>
  )
}

export default Router