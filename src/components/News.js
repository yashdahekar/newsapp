import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Brandon Huffman",
            "title": "College football recruiting: 2022 National Signing Day schedule, key announcement times, predictions, picks - CBS Sports",
            "description": "Everything you need to know about National Signing Day as the Class of 2023 begins putting ink to paper",
            "url": "https://www.cbssports.com/college-football/news/college-football-recruiting-2022-national-signing-day-schedule-key-announcement-times-predictions-picks/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/20/519a5eae-4324-442c-a170-e320b3358e4e/thumbnail/1200x675/385a1ffc3250b5d66924bc4a4e6f68dc/matayo.jpg",
            "publishedAt": "2022-12-21T15:40:00Z",
            "content": "Wednesday marks the opening of the early signing period for the 2023 college football recruiting cycle, and with the majority of the Top247 prospects having already made their decisions, all eyes wil… [+4121 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": "Michael Florio",
            "title": "NFL Fantasy 2022 Start 'Em, Sit 'Em Week 16: Defenses - NFL.com",
            "description": "All the answers you're looking for about your lineup questions. Check out the latest in the Start 'Em, Sit 'Em for your 2022 NFL fantasy football league.",
            "url": "https://www.nfl.com/news/nfl-fantasy-2022-start-em-sit-em-week-16-defenses",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/qpl1cfybobhqitbne9e8",
            "publishedAt": "2022-12-21T15:00:00Z",
            "content": "You have lineup questions. We have answers. At least we hope. Start 'Em &amp; Sit 'Em has helped fantasy managers for years make those pressing lineup decisions. And you know what is a good decision?… [+248 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello I am a constructor from  News components")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsBuddy - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='my title' description='my descrip' imgUrl='https://sportshub.cbsistatic.com/i/r/2022/12/20/519a5eae-4324-442c-a170-e320b3358e4e/thumbnail/1200x675/385a1ffc3250b5d66924bc4a4e6f68dc/matayo.jpg' newsUrl="Todo"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='my title' description='my descrip' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='my title' description='my descrip' />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
