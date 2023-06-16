import CreatorsType from '@/types/comics/creators/creators'
import ThumbnailType from '@/types/comics/thumbnail/thumbnail'

type Comics = {
    creators: CreatorsType
    description: string
    thumbnail: ThumbnailType
    title: string
}

export default Comics