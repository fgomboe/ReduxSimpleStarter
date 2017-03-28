/**
 * Created by fgomboe on 23/03/17.
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAU1UEq_cp_JaGmXn7xfw6sMyFmYpRHa-0';

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'pink floyd'}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[1]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList
                    videos={ this.state.videos }
                    onVideoSelect= {selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));