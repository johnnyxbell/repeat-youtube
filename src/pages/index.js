import React, {useState} from 'react';
import YouTube from 'react-youtube';

const Index = () => {
  const [values, setValues] = useState({});

  const handleInputChange = (e, setValues) => {
    const {name, value} = e.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const videoId = values && values.video && values.video.split('=')[1];

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <div>
      Repeat YouTube
      <input
        placeholder='Put in your youtube video link'
        value={values.video ? values.video : ''}
        onChange={(e) => handleInputChange(e, setValues)}
        name='video'
        id='video'
      />
      {videoId && <YouTube videoId={videoId} opts={opts} onReady={_onReady} />}
    </div>
  );
};
export default Index;
