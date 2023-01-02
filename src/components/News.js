import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import defaultjpg from "./default.jpg"
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [pageNo, setPageNo] = useState(1)


    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=${props.pagesize}&category=${props.category}&apiKey=5a985d4b61f04f95bb52a2719d5e8cae&page=${props.pageNo}`;
        props.setProgress(25);
        setLoading(true)
        props.setProgress(35);
        let data = await fetch(url);
        props.setProgress(45);
        console.log("done")
        props.setProgress(55);
        setLoading(false)
        props.setProgress(65);
        let parsedata = await data.json();
        props.setProgress(75);
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        props.setProgress(100);

    }

    const captalizedString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
        document.title = `${captalizedString(props.category)} - NewsMania`
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=${props.pagesize}&category=${props.category}&apiKey=5a985d4b61f04f95bb52a2719d5e8cae&page=${pageNo + 1}`;
        setPageNo(pageNo + 1)
        let data = await fetch(url);
        console.log("done")
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
        setLoading(false)
    };

    return (
        <>
            <div className=" my-5">
                <div className="d-flex align-item-center justify-content-center ">
                    <h1 className="mt-5">NewsMania - Top {props.category} Headlines.</h1></div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-3">
                            {articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url} >
                                    {!loading && <Newsitems title={element.title ? element.title : ""} description={!element.description ? "No description for this news." : element.description.slice(0, 288)} src={element.urlToImage ? element.urlToImage : defaultjpg} newsUrl={element.url} publisAt={element.publishedAt} author={element.source.name} />}
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default News

News.defaultProps = {
    country: "in",
    pagesize: 10,

}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}


