import React, {useEffect, useState} from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = props.turl;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.data.articles)
        setTotalResults(parsedData.data.count)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - DigiNews`;
        updateNews();
        // eslint-disable-next-line
    }, [])

        return (
            <>
                <div
                    style={{
                        marginTop: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    className={`text-${props.color ? 'light' : 'dark'}`}
                >
                    <h1 className="text-start">Latest {capitalizeFirstLetter(props.category)} News</h1>
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    hasMore={articles.length !== totalResults}
                >
                    <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.sourceUrl}>
                                <NewsItem title={element.title ? element.title : ""} description={element.content ? element.content : ""} imageUrl={element.imageUrl} newsUrl={element.sourceUrl} author={element.authorName} date={element.createdAt} source={element.sourceName} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </>
        )

}

News.propTypes = {
    category: PropTypes.string,
}

export default News
