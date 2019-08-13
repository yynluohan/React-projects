import React from 'react';
import styles from '../base.css';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }

  onMouseLeave = () => {
    if (this.props.updateVisible) {
      this.props.updateVisible()
    }
  }

  render() {

    const { visible } = this.state;
    const { message } = this.props;

    const style = {
      position:'absolute',
      backgroundColor:'#fff',
      left:0,
      padding: '2em',
      left:'-85px',
      top: '30px',
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
      textAlign: 'center',
      ...this.props.style
    }

    return (
      <div style={style} className={styles.modaltrigon} onMouseLeave={() => this.onMouseLeave()}>
        {
          visible ?
          <div>
            <img style={{ width:'150px'}} src={require('../../images/public_code.png')} />
            {
              this.props.children
            }
          </div>
          : ''
        }
      </div>
    )
  }
}
