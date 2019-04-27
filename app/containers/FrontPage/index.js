import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DISPATCH_SAGA } from './constants'
import { getText } from './selectors'
import { Wrapper } from 'components/wrapper'
import NewsComp from 'components/newsComp'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitial: () => dispatch({ type: DISPATCH_SAGA }),
    }
}
const mapStateToProps = (state) => {
    return {
        articles: getText(state)
    }
}

class FrontPage extends Component {

    componentDidMount() {
        const { fetchInitial } = this.props
        fetchInitial()
    }

    render() {
        const { articles } = this.props
        console.log(articles)
        return (
            <Wrapper >
                {articles && <ul>
                    {articles.map((article, index) =>
                        <a href={article.url} key={index} >
                            <NewsComp
                                key={index}
                                source={article.source.name}
                                title={article.title}
                                src={article.urlToImage}
                                text={article.description}
                            />
                        </a>)}
                </ul>}
            </Wrapper >
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FrontPage)