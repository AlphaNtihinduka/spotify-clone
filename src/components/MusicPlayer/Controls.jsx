import React from 'react';
import PropTypes from 'prop-types';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import {
  BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle,
} from 'react-icons/bs';

const Controls = ({
  isPlaying, repeat, setRepeat,
  shuffle, setShuffle,
  currentSongs, handlePlayPause,
  handlePrevSong, handleNextSong,
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  repeat: PropTypes.bool.isRequired,
  setRepeat: PropTypes.func.isRequired,
  shuffle: PropTypes.bool.isRequired,
  setShuffle: PropTypes.func.isRequired,
  currentSongs: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the shape of each object in the array
      // Example shape:
      // id: PropTypes.number.isRequired,
      // title: PropTypes.string.isRequired,
      // artist: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handlePlayPause: PropTypes.func.isRequired,
  handlePrevSong: PropTypes.func.isRequired,
  handleNextSong: PropTypes.func.isRequired,
};

export default Controls;
