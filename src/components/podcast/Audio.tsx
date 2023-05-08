interface Props {
  episodeUrl: string;
  episodeFileExtension: string;
  startLoading: () => void;
  stopLoading: () => void;
  loading: boolean;
}

export default function Audio (props: Props) {
  const { episodeUrl, episodeFileExtension, startLoading, stopLoading, loading } = props

  return (
    <audio
      onLoadStart={() => {
        startLoading()
      }}
      onLoadedData={() => {
        stopLoading()
      }}
      controls
      className={`player ${loading ? 'hide' : ''}`}
      autoPlay
      data-testid='podcast-detail-episode-audio'
    >
      <source src={`${episodeUrl}`} type={`audio/${episodeFileExtension}`} />
    </audio>
  )
}
