/**
 * Created by fgomboe on 26/03/17.
 */

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {

    return (
        <ul className="col-md-4 list-group">
            { videos.map(v =>
                <VideoListItem
                    key={ v.etag }
                    video={ v }
                    onVideoSelect={onVideoSelect}/>
            ) }
        </ul>
    );
}

export default VideoList;