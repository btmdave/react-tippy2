import React from 'react'
import { render } from 'react-dom'
import Tippy2 from '../../src/tippy2'

class App extends React.Component {
  render () {

    class Html extends React.Component {
      render () {
        return (
          <div>This is html Content</div>
        )
      }
    }

    return (
      <div>
        <Tippy2 title="Example Tooltip" arrow arrowType='round' html={<Html />}>
          <a href='#' className='test_link'>Tooltip</a>
        </Tippy2>
      </div>
    )
  }
}
render((
  <App />
), document.getElementById('app'))
