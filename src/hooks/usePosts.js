import { useSelector } from 'react-redux'

// Keep this hook simple: just read posts from Redux
export const usePosts = () => {
  return useSelector((state) => state.posts)
}
