//the video arrray will come there
// exampleVideaData will be imported
// iterate through the data
// pluck the url/title/descritption
// send to video list
//new arrhy of video objects containing only url/title/description
//array is sent to videoList;



// import exampleVideoData from "../data/exampleVideoData.js";

// class VideoListEntry extends React.Components (video) {
//   return (<div className="video-list-entry media">
//     <div className="media-left media-middle">

//       <img className="media-object" src={snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">{video.snippet.title}</div>
//       <div className="video-list-entry-detail">{video.snippet.description}</div>
//     </div>
//   </div> )
// };

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: PropTypes.object.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// export default VideoListEntry;


// ORIGINAL ========================================

var VideoListEntry = (video) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
