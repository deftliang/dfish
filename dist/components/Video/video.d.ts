import { FC } from 'react';
import './_style.scss';
interface VideoProps {
    src: string;
    width?: number;
    height?: number;
    poster?: string;
}
declare const Video: FC<VideoProps>;
export default Video;
