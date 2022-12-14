import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostItem({PostsData}) {
    const {title} = useParams()

    return (
        <div>
            {PostsData.filter((post) => post.title === title).map((card) => 
                <div className='postitem' key={card.id}>
                    <h1>{card.title}</h1>
                    <a href={`edit/${card.id}`}>Edit</a>
                    <div className='shinobi'>
                        <img src={card.image} alt="postimage"/>
                    </div>
                    <p>{card.description}</p>
                </div>
            )}
        </div>
    )
}
