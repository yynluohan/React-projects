import React from 'react';
import { getScrollHeight,getScrollTop,getClientHeight} from '../utils/getHeight';


export default class BrowserScrolling extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0
    // window.scrollTo(0,0)
    // window.scrollY = 0
  }

  componentWillMount(){
    window.addEventListener('scroll', this.scrollFunction)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction)
  }

  scrollFunction = () => {
    if (this.props.onGetHeight) {
      this.props.onGetHeight(document.documentElement.scrollTop)
    }
  }

  render(){
    return ''
  }
}
