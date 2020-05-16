import React, {useState} from 'react';
import YouTube from 'react-youtube';
import styled, {createGlobalStyle} from 'styled-components';
import BackgroundImage from '../assets/images/moshpithome.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackgroundImage});
  font-family: 'Mukta', serif;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 0 30px 0 10px;
  height: 45px;
  font-size: 16px;
  border-radius: 0;
  width: 100%;
  box-sizing: border-box;
  margin: 25px 0;
`;

const Content = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 800px;
  min-width: 700px;
  transform: translate(-50%, -50%);
  h1 {
    padding: 0;
    font-weight: bold;
    font-size: 35px;
    margin: 0 auto 0 auto;
    line-height: 45px;
    text-align: center;
    color: white;
  }
  p {
    color: white;
  }
`;

const Index = () => {
  const [values, setValues] = useState({video: 'hi'});

  const handleInputChange = (e, setValues) => {
    const {name, value} = e.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let videoId = '';

  let noId = false;

  if (values.video.includes('youtube') || values.video.includes('youtu.be')) {
    videoId = values && values.video && values.video.split('=')[1];
  } else {
    noId = true;
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: videoId,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <h1>Repeat YouTube Videos</h1>
        <Input
          placeholder='Put in your youtube video link'
          value={values.video ? values.video : ''}
          onChange={(e) => handleInputChange(e, setValues)}
          name='video'
          id='video'
        />
        {videoId && !noId && <YouTube videoId={videoId} opts={opts} onReady={_onReady} />}
        {noId && !videoId && <p>Please use the format of https://www.youtube.com/watch?v=ID</p>}
      </Content>
    </Container>
  );
};
export default Index;
