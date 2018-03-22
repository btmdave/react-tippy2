import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import ReactDom from 'react-dom'
import Tippy from 'tippy.js/dist/tippy'
import 'tippy.js/dist/tippy.css'

class Tippy2 extends React.Component {
  constructor(props) {
    super(props)
    this.init = this.init.bind(this)
    this.destroy = this.destroy.bind(this)
  }
  componentDidMount () {
    this.init()
  }
  componentWillUnmount () {
    this.destroy()
  }
  getHtml () {
    const div = document.createElement('div')
    ReactDom.render(this.props.html)
    return div
  }
  init () {
    const html = (this.props.html) ? this.getHtml() : false

    this.tippyDOM.setAttribute('title', this.props.title)

    this.tippy = Tippy(this.tippyDOM, {
      html: el => html,
      allowTitleHTML: this.props.allowTitleHTML,
      animateFill: this.props.animateFill,
      animation: this.props.animation,
      appendTo: this.props.appendTo,
      arrow: this.props.arrow,
      arrowTransform: this.props.arrowTransform,
      arrowType: this.props.arrowType,
      createPopperInstanceOnInit: this.props.createPopperInstanceOnInit,
      delay: this.props.delay,
      distance: this.props.distance,
      duration: this.props.duration,
      dynamicTitle: this.props.dynamicTitle,
      flip: this.props.flip,
      flipBehavior: this.props.flipBehavior,
      followCursor: this.props.followCursor,
      hideOnClick: this.props.hideOnClick,
      inertia: this.props.inertia,
      interactive: this.props.interactive,
      interactiveBorder: this.props.interactiveBorder,
      livePlacement: this.props.livePlacement,
      maxWidth: this.props.maxWidth,
      multiple: this.props.multiple,
      offset: this.props.offset,
      onHidden: this.props.onHidden,
      onHide: this.props.onHide,
      onShow: this.props.onShow,
      onShown: this.props.onShown,
      performance: this.props.performance,
      placement: this.props.placement,
      popperOptions: this.props.popperOptions,
      size: this.props.size,
      sticky: this.props.sticky,
      target: this.props.target,
      theme: this.props.theme,
      touchHold: this.props.touchHold,
      trigger: this.props.trigger,
      updateDuration: this.props.updateDuration,
      zIndex: this.props.zIndex
    })
  }
  destroy() {
    if (this.tippy) {
      this.tippyDOM._tippy.destroy()
      this.tippyDOM = null
      this.tippy = null
    }
  }
  render() {
    return (
      <div
        title={this.props.title}
        style={{
            display: 'inline',
            ...this.props.style
          }}
        ref={(tooltip) => { this.tippyDOM = tooltip }}>
        {this.props.children}
      </div>
    )
  }
}

Tippy2.defaultProps = {
  title: 'React Tippy 2',
  allowTitleHTML: true,
  animateFill: true,
  animation: 'shift-away',
  appendTo: document.body,
  arrow: true,
  arrowTransform: '',
  arrowType: 'sharp',
  createPopperInstanceOnInit: false,
  delay: 0,
  distance: 10,
  duration: [350, 300],
  dynamicTitle: false,
  flip: true,
  flipBehavior: 'flip',
  followCursor: false,
  hideOnClick: true,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  livePlacement: true,
  maxWidth: '',
  multiple: false,
  offset: 0,
  onHidden: () => {},
  onHide: () => {},
  onShow: () => {},
  onShown: () => {},
  performance: false,
  placement: 'top',
  popperOptions: {},
  size: 'regular',
  sticky: false,
  target: null,
  theme: 'dark',
  touchHold: false,
  trigger: 'mouseenter focus',
  updateDuration: 350,
  zIndex: 9999
}

Tippy2.propTypes = {
  html: propTypes.element
}

export default Tippy2
