import Text from 'antd/lib/typography/Text'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function Router() {
  return (
    <div className='flex flex-row  items-center justify-center w-full h-screen' >
    <BrowserRouter >
        <div className="flex flex-row bg-gray-900 items-center justify-center">
          <Text style={{
              fontSize: 40
            }} >Howdy 😄  </Text>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default Router