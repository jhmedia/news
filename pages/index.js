import React, { Component } from 'react';
import FrontPage from 'containers/FrontPage'

// must return store or state breaks, cant connect inital page to redux?
class InitialPage extends Component {
    static async getInitialProps({ store }) {
        return { store }
    }

    render() {
        const { store } = this.props

        return (
            <div>
                <FrontPage />
            </div>
        )
    }
}
export default InitialPage
