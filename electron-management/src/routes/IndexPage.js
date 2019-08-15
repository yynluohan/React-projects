import React from 'react';
import { connect } from 'dva';

class IndexPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        Index.page
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    indexPage: state.indexPage
  }
}

export default connect(mapStateToProps)(IndexPage)
