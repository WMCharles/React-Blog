import React from 'react'
import { useParams } from 'react-router-dom'
import { PostsData } from '../../PostsData'

export default function PostItem() {
    const {title} = useParams()

    return (
        <div>
            {PostsData.filter((post) => post.title === title).map((card) => 
                <div className='postitem'>
                    <h1>{card.title}</h1>
                    <div className='shinobi'>
                        <img src={card.image} alt="postimage"/>
                    </div>
                    <p>{card.description}</p>
                </div>
            )}
        </div>
    )
}
