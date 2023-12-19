import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                    </div>
                    <img 
                        style={{
                            borderRadius: '1.2rem',
                            borderBottomLeftRadius: '0',
                            borderBottomRightRadius: '0',
                            height:'25rem',
                            width:'25rem'
                            
                        }}
                    
                    src={!imageUrl ? "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2022/08/breaking-news-template-5-1659920603.jpg" : imageUrl} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <div href={newsUrl} target="_blank" class="d-grid gap-2">
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Full Story</a>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted"><b>From {source}</b> <br></br>on  {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small>
                    </div>
                </div>
            </div>
        )

}

export default NewsItem
