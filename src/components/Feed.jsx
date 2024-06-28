import {useDispatch , useSelector} from 'react-redux'


const Feed = () => {
  const feed = useSelector(state => state.Feed.feed);


  return (
    <div className="w-full rounded-md bg-slate-950 p-2 m-1">
        {feed}
    </div>
  )
}

export default Feed