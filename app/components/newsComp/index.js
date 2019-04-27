import HeadLine from './headLine'
import Ingress from './ingress'
import NewsImage from './newsImage'
import NewsSource from './newsSource'
export default function newsComp(props) {
    const { src, text, title, source } = props;

    return (
        <div>
            <hr />
            <NewsSource source={source} />
            <NewsImage src={src} />
            <HeadLine title={title} />
            <Ingress text={text} />
        </div>
    )
}
