import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import type { ChangeEvent } from 'react'

export default function YoutubeAge():JSX.Element {

    const [youtubeUrl, setyoutubeUrl] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)

    const urlValue = (event: ChangeEvent<HTMLInputElement>): void => {
        setyoutubeUrl(event.target.value)
    }

    const clickYoutube = (): void => {
        setIsPlaying(true)
    }

    return (
        <div>
            <div>
                유투브 url : <input type="text" placeholder='유튜브 주소를 입력하세요' onChange={urlValue}/>
                <button onClick={clickYoutube}>동영상 가져오기</button>
                <ReactPlayer
                    url={youtubeUrl}
                    width='800px'         
                    height='500px'
                    playing={true}
                    muted={true}
                ></ReactPlayer>
            </div>
        </div>
    )
}