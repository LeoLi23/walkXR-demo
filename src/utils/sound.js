import { useEffect } from 'react';

function useSound(url, autoplay = false, loop = true) {
  useEffect(() => {
    let audio = new Audio(url);

    if (autoplay) {
      audio.addEventListener('canplay', () => {
        audio.play();
      });
    }

    if (loop) {
      audio.loop = true;
    }

    return () => {
      audio.pause();
    };
  }, [url, autoplay, loop]);
}

export default useSound;
