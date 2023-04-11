import { CardWrapper } from "./components/CardWrapper";
import { VideoPlayer } from "./components/VideoPlayer";
import { BarChartWrapper } from "./components/BarChartWrapper";

const returnLibrary = () => {
  return {
    CardWrapper: CardWrapper,
    VideoPlayer: VideoPlayer,
    BarChartWrapper: BarChartWrapper,
  };
};
export default returnLibrary();
