import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import { ChakraProvider } from '@chakra-ui/react'

createInertiaApp({
  resolve: name => import(`./src/Pages/${name}.jsx`),
  setup({ el, App, props }) {
    render(
      <ChakraProvider>
          <App {...props} />
      </ChakraProvider>,
      el)
  },
})

InertiaProgress.init({
  color: '#F6E05E'
})