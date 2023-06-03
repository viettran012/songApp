import {useRef, useEffect} from 'react';
import Sound from 'react-native-sound';
import {useSelector, useDispatch} from 'react-redux';
import getSongService, {
  getSongInfoService,
  getSongLyricService,
} from '../../services/getSongService';
import {
  nextSong,
  setCurrLyric,
  setCurrTimeSong,
  setIsPlaying,
} from '../../redux/actions/player';
import {get} from '../../utils/request';

Sound.setCategory('Playback');

function MusicPlayer() {
  const dispatch = useDispatch();

  const currSong = useSelector(state => state.player.currSong);
  const currTime = useSelector(state => state.player.currTime);
  const isPlaying = useSelector(state => state.player.isPlaying);

  const whoosh = useRef();
  const sendTimeInterval = useRef();

  function play() {
    if (whoosh?.current) {
      whoosh.current.play(success => {
        if (success) {
          // dispatch()
          console.log('finish');
          dispatch(nextSong());
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        whoosh.current.stop(() => {
          // whoosh.current.play();
        });
      });
      dispatch(setIsPlaying(true));
    }
  }

  function pause() {
    if (whoosh?.current) {
      whoosh.current.pause();
      dispatch(setIsPlaying(false));
    }
  }

  useEffect(() => {
    clearInterval(sendTimeInterval?.current);
    sendTimeInterval.current = setInterval(() => {
      if (isPlaying && currSong && whoosh?.current?.getCurrentTime) {
        whoosh?.current?.getCurrentTime(second => {
          dispatch(setCurrTimeSong({[currSong?.encodeId]: second}));
        });
      }
    }, 1000);

    return () => clearInterval(sendTimeInterval);
  }, [isPlaying, currSong?.encodeId]);

  useEffect(() => {
    if (whoosh?.current?.setCurrentTime) {
      play();
      whoosh.current.setCurrentTime(currTime);
    }
  }, [currTime]);

  useEffect(() => {
    if (whoosh?.current) {
      if (isPlaying) {
        play();
      } else {
        pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const songId = currSong?.encodeId;
    if (!songId) return;
    if (whoosh.current) {
      whoosh.current.release();
    }
    getSongService(songId).then(async data => {
      if (data?.result == 1) {
        getSongLyricService(songId).then(data => {
          if (data?.result == 1) {
            const lyricbfH = data?.data?.data?.sentences;

            dispatch(setCurrLyric({[songId]: lyricbfH}));
          }
        });
        const mp3Link = data?.data?.data?.[128];

        if (whoosh.current) {
          whoosh.current.release();
        }
        whoosh.current = new Sound(mp3Link, Sound.MAIN_BUNDLE, error => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }

          if (currSong?.notPlay) {
            return;
          }

          play();
        });
      } else {
        if (whoosh.current) {
          whoosh.current.release();
          dispatch(setCurrLyric({[songId]: {isVip: true}}));
        }
      }
    });
  }, [currSong?.encodeId]);

  return null;
}

export default MusicPlayer;
