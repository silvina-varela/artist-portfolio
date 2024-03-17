interface VimeoVideoProps {
  videoId: string;
}

const VimeoVideo = ({ videoId }: VimeoVideoProps) => {
  return (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          width="100%"
          height="60%"
          frameBorder="0"
          allowFullScreen
        ></iframe>

  );
};

export default VimeoVideo;
