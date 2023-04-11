import { CardWrapper } from "./components/CardWrapper";
import { VideoPlayer } from "./components/VideoPlayer";

const returnLibrary = () => {
  return {
    CardWrapper: CardWrapper,
    VideoPlayer: VideoPlayer,
  };
};
export default returnLibrary();
