import React from 'react'
import { render } from 'react-dom'
import Tippy2 from '../../dist/tippy2'

class App extends React.Component {
  render () {
    const html = () => {
      return (
        <div>This is html Content</div>
      )
    }
    return (
      <div>
        <Tippy2 title="Example Tooltip" arrow arrowType='round' html={html}>
          <a href='#' className='test_link'>Tooltip</a>
        </Tippy2>
      </div>
    )
  }
}
render((
  <App />
), document.getElementById('app'))
