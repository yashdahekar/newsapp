import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }
      capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase()+string.slice(1);
      }
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page:1,
            totalResults: 0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsBuddy`;
    }
    // document.title=`${capitalizeFirstLetter(props.category)} - NewsBuddy`;

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bfaec1d08c8f4739baf266022cf39cbf&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        this.props.setProgress(45);
        let parsedData = await data.json()
        this.props.setProgress(65);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        
        this.props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    },[])

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfaec1d08c8f4739baf266022cf39cbf&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }

     handlePrevClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfaec1d08c8f4739baf266022cf39cbf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json() 
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page:this.state.page -1})
        this.updateNews();
    }
    
    handleNextClick = async ()=>{
        //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfaec1d08c8f4739baf266022cf39cbf&page=${this.state.page + 1}&pageize=${this.props.pageSize}`;
            //         this.setState({loading: true});
            //         let data = await fetch(url);
            //         let parsedData = await data.json() 
            //         this.setState({
                //             page: this.state.page + 1,
                //             articles: parsedData.articles,
                //             loading: false
                //         })
                // }
                this.setState({page:this.state.page+1})
                this.updateNews();
            }

    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bfaec1d08c8f4739baf266022cf39cbf&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    }
}

export default News