import { CardWrapper } from "./components/CardWrapper";
import { BarChartWrapper } from "./components/BarChartWrapper";
import { VideoPlayer } from "./components/VideoPlayer";

const returnLibrary = () => {
  return {
    CardWrapper: CardWrapper,
    BarChartWrapper: BarChartWrapper,
    VideoPlayer: VideoPlayer,
  };
};
export default returnLibrary();
