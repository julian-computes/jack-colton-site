import TextPost from '@/components/TextPost';
import VideoPost from '@/components/VideoPost';

export class TextPostData {
  constructor(public title: string, public tag: tag, public body: JSX.Element) {
  }
}

export class VideoPostData {
  constructor(public title: string, public url: string, public description: string | JSX.Element,
              public frameClass: string = '', public tag: tag = 'visual') {
  }
}

type PostData = TextPostData | VideoPostData;

const PostItems: PostData[] = [
  new VideoPostData('Foo Fighters - The Teacher', 'https://www.youtube.com/embed/6MF6trC529M', 'From the album \'But Here We Are\' // Available June 2nd. Editing & VFX by Jack Colton and Tony Oursler', 'pb-3'),
  new VideoPostData('Hollow Earth: Art, Caves & The Subterranean Imaginary',
    'https://www.youtube.com/embed/XnODiOKlTOc',
    <p>Mixing and editing. <a href='https://www.nottinghamcontemporary.org/whats-on/hollow-earth-art-caves-the-subterranean-imaginary'>Hollow Earth: Art, Caves & The Subterranean Imaginary</a></p>,
    'pb-3', 'sound, visual'),
  new TextPostData('STALK, 2021', 'sound',
    <p><a href='https://www.performa2021.org/artists/ericka-beckman'>Ericka Beckman Artist Profile. STALK, 2021.</a></p>
  ),
  new VideoPostData('Sometimes It Snows In April', 'https://player.vimeo.com/video/473427165', ''),
  new VideoPostData('Line Drawing', 'https://player.vimeo.com/video/531804034', '', ''),
  new VideoPostData('Modern Alchemy, 2022', 'https://www.youtube.com/embed/CtkajwhHf_U', '', 'pb-3'),
  new VideoPostData('Xiaomi x Daniel Arsham Advertisement, 2022', 'https://www.youtube.com/embed/uuKWF6YOSEI', '', 'pb-3'),
  new TextPostData('Tiffany & Co. x Daniel Arsham Advertisement', 'visual',
    <p><a href='https://www.tiffany.com/stories/guide/daniel-arsham-x-lock/'>Tiffany & Co. x Daniel Arsham Advertisement, 2022.</a></p>
  ),
];

const Posts = PostItems.map((post, i) => {
  if (post instanceof TextPostData) {
    post = post as TextPostData;
    return <TextPost title={post.title} body={post.body} tag={post.tag} key={i}/>;
  } else {
    post = post as VideoPostData;
    return <VideoPost title={post.title} url={post.url} description={post.description} frameClass={post.frameClass}
                      tag={post.tag}
                      key={i}/>
  }
});

export default Posts;
