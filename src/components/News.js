import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bfaec1d08c8f4739baf266022cf39cbf&page=${page}&pageSize=${props.pageSize}`);
  }, [props.country, props.category, page, props.pageSize]);

  useEffect(() => {
    const updateNews = async () => {
      setLoading(true);
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };
    updateNews();
  }, [url]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: "90px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map(element => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title || ''}
                  description={element.description || ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}