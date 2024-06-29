import { useSelector} from 'react-redux'
import VideoCard from './VideoCard';

const Feed = () => {
  const feed = useSelector(state => state.Feed.feed);


  return (
    <div className="w-full rounded-md bg-slate-950 p-2 m-1">
        <span>{feed}</span>
      <VideoCard />
    </div>
  )
}

export default Feed