## react-tippy2

React component for [Tippy.js](https://atomiks.github.io/tippyjs/) 2.x.

### Installation
```
npm install react-tippy2
```

### Example

See `docs` for simple example.  In `docs` folder, run `npm run dev`

### Basic Usage

```
import Tippy2 from 'react-tippy2'

const App = () => {
  return (
    <Tippy2 title='This is a tooltip!'></Tippy2>  
  )
}

```

#### With HTML content
```
class Html extends React.Component {
  render () {
    return (
      <div>This is html Content</div>
    )
  }
}

<Tippy2 title='This is a tooltip!' html={<Html />}></Tippy2>  

```
