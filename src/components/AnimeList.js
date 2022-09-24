import React from 'react'

export const AnimeList = ({animeList, setAnimeInfo, animeComponent, handleList}) => {

    const AddToList = animeComponent;
  return (
    <>
        {
            animeList ? (
                animeList.map((anime, index) => {
                    return (
                        <div className='card' key={index} onMouseEnter={()=>setAnimeInfo(anime)}>
                            <img src={anime.images.jpg.large_image_url} alt='animeImage'/>
                            <div className='anime-info'>
                                <h4>{anime.title}</h4>
                                <div className='overlay' onClick={()=>handleList(anime)}>
                                    <h3>{anime.title_japanese}</h3>
                                    <hr className='synopsis-hr'/>
                                    <h3>SYNOPSIS:</h3>
                                    <div className='synopsis'>
                                        <p>{anime.synopsis}</p>
                                    </div>
                                    <AddToList />
                                </div>
                            </div>
                        </div>
                    )
                })
            ): "Not Found"
        }
    </>
  )
}
