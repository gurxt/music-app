import React from 'react'
import Playlist from './music-playlist'
import Title from './music-title'
import Cover from './music-cover'
import Controls from './music-controls'

import CSS from './../assets/styled/music-css.js'

const Music = () => {
    return (
        <CSS.C>
            <CSS.C1>
                <Playlist />
            </CSS.C1>
            <CSS.C2>
                <CSS.C2a>
                    <Title />
                </CSS.C2a>
                <CSS.C2b>
                    <Cover />
                </CSS.C2b>
                <CSS.C2c>
                    <Controls />
                </CSS.C2c>
            </CSS.C2>
        </CSS.C>
    )
}
export default Music
