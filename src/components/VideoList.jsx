//video list takes an array of video objects
//maps through array and dynamically creates a  video entery within the video list
//should be be rendered to app.jsx
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    <div><h5><em>{VideoListEntry(props[0])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[1])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[2])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[3])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[4])}</em> view goes here</h5></div>
  </div>
);

// var videoList = (props)=>(
//   <div class = 'video-list'>
//     {props.videos.map(video =>
//       <VideoListEntry key={i} video ={video}>
//       )}
//   </div>
// );
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};
//
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
