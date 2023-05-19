/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Player = ({
  activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat,
}) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

Player.propTypes = {
  activeSong: PropTypes.shape({
    hub: PropTypes.shape({
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          // Define the shape of each object in the actions array
          // Example shape:
          uri: PropTypes.string.isRequired,
        }),
      ),
    }),
  }),
  isPlaying: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  seekTime: PropTypes.number.isRequired,
  onEnded: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onLoadedData: PropTypes.func.isRequired,
  repeat: PropTypes.bool.isRequired,
};

Player.defaultProps = {
  activeSong: null,
};

export default Player;
