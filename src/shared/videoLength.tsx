import moment from "moment"

interface VideoLengthProps {
  time: string;
}

const VideoLength = ({ time }: VideoLengthProps) => {

  const videoLengthSeconds = moment().startOf("day").seconds(Number(time)).format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-sm rounded-md">
      {videoLengthSeconds}
    </div>
  )
}

export default VideoLength