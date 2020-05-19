import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import styled, {createGlobalStyle} from 'styled-components';
import BackgroundImage from '../assets/images/moshpithome.jpg';
import Ad from '../assets/images/ad.jpg';
import {Helmet} from 'react-helmet';
import Footer from '../components/footer';

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

const PreviousVideos = styled.div`
  h2 {
    padding: 0;
    font-weight: bold;
    font-size: 20px;
    margin: 20px auto 20px auto;
    text-align: center;
    color: white;
  }
  margin-bottom: 50px;
`;

const Previous = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 150px;
    margin-right: 10px;
    cursor: pointer;
    &:last-child {
      margin: 0;
    }
  }
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
  const [values, setValues] = useState({video: ''});

  useEffect(() => {
    if (values.video.includes('youtube') || values.video.includes('youtu.be')) {
      if (typeof window !== 'undefined' && window.localStorage.getItem('videoHistory')) {
        typeof window !== 'undefined' &&
          window.localStorage.setItem('videoHistory', [
            typeof window !== 'undefined' && window.localStorage.getItem('videoHistory'),
            values.video.split('=')[1],
          ]);
      } else {
        typeof window !== 'undefined' &&
          window.localStorage.setItem('videoHistory', values.video.split('=')[1]);
      }
    }
  }, [values.video]);

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
    event.target.playVideo();
  };

  const videos =
    typeof window !== 'undefined' &&
    window.localStorage.getItem('videoHistory') &&
    localStorage.getItem('videoHistory').split(',');

  const videosArray =
    videos &&
    videos.filter(function (item, pos) {
      return videos.indexOf(item) === pos;
    });

  return (
    <Container>
      <Helmet>
        <title>
          Repeat YouTube videos, Loop YouTube Videos, Repeat full YouTube Videos using repeat
          YouTube.com
        </title>
        <meta
          name='description'
          content='Repeat YouTube videos is the easiest way to Listen to YouTube videos on repeat, or loop YouTube Videos'
        />
      </Helmet>
      <GlobalStyle />
      <Content>
        <h1>Repeat YouTube Videos</h1>
        <Input
          placeholder='E.G. - https://www.youtube.com/watch?v=U3c0feokQc4'
          value={values.video ? values.video : ''}
          onChange={(e) => handleInputChange(e, setValues)}
          name='video'
          id='video'
        />
        {videoId && !noId && <YouTube videoId={videoId} opts={opts} onReady={_onReady} />}
        {noId && !videoId && <p>Please use the format of https://www.youtube.com/watch?v=ID</p>}
        {videos && videosArray.length !== 0 && (
          <PreviousVideos>
            <h2>Previous Videos</h2>
            <Previous>
              {videosArray.slice(0, 5).map((i) => (
                <img
                  src={`https://img.youtube.com/vi/${i}/hqdefault.jpg`}
                  key={i}
                  onClick={() => setValues({video: `https://www.youtube.com/watch?v=${i}`})}
                  alt={i}
                />
              ))}
            </Previous>
          </PreviousVideos>
        )}
        <p>
          <a
            href='https://www.evvntly.com/?ref=repeatyoutube.dev'
            target='_blank'
            rel='noreferrer noopener'
            title='Evvntly Find Events Near You'
          >
            <img height={150} src={Ad} alt='Evvntly' />
          </a>
        </p>
      </Content>
      <Footer />
    </Container>
  );
};
export default Index;
