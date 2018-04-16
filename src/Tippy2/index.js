import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import ReactDom from 'react-dom';
import Tippy from 'tippy.js/dist/tippy';
import 'tippy.js/dist/tippy.css';

class Tippy2 extends React.Component {
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hide && this.tippyDOM && nextProps.hide !== this.props.hide) {
      this.tippyDOM._tippy.hide();
    }
  }

  init() {
    this.tippyDOM.setAttribute('title', this.props.title);

    const options = {
      html: false,
      ...this.props,
    };

    if (this.props.html) {
      options.html = el => {
        const elm = document.createElement('div');
        ReactDom.render(this.props.html, elm);
        return elm;
      };
    }

    this.tippy = Tippy(this.tippyDOM, options);
  }

  destroy() {
    if (this.tippy) {
      this.tippyDOM._tippy.destroy();
      this.tippyDOM = null;
      this.tippy = null;
    }
  }

  render() {
    return (
      <div
        title={this.props.title}
        style={{
          display: 'inline',
          ...this.props.style,
        }}
        ref={tooltip => {
          this.tippyDOM = tooltip;
        }}>
        {this.props.children}
      </div>
    );
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
  zIndex: 9999,
  hide: false,
};

Tippy2.propTypes = {
  html: propTypes.element,
};

export default Tippy2;
