import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = (component) => {
  return Loadable({
    loader: component,
    loading: () => <div>load...</div>
  })
}

export default LoadableComponent
