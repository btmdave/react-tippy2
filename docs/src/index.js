import React from 'react'
import { render } from 'react-dom'
import Tippy2 from '../../src/tippy2'

class Html extends React.Component {
  render () {
    return (
      <div>This is html content</div>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hide: false
    }
  }
  hideTooltip() {
    this.setState({
      hide: true
    })
  }

  render () {
    const { hide } = this.state
    return (
      <div>
        <button onClick={() => this.hideTooltip()} />
        <Tippy2 title="Example Tooltip" interactive trigger='click' arrow arrowType='round' html={<Html />} hide={hide}>
          <a href='#' className='test_link'>Tooltip</a>
        </Tippy2>
      </div>
    )
  }
}
render((
  <App />
), document.getElementById('app'))
