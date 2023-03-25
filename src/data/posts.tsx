import TextPost from '@/components/TextPost';
import VideoPost from '@/components/VideoPost';

const Posts = [
  (<TextPost title='Lorem ipsum dolor sit'
             tag='sound'
             body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate.'/>),
  (<TextPost title='Lorem ipsum dolor sit'
             tag='visual'
             body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate.'/>),
  // (<VideoPost title='fefefefe' url='https://www.youtube.com/embed/CtkajwhHf_U'
  //             description='This is a description of the video'/>),
  (<TextPost title='Lorem ipsum dolor sit'
             tag='sound'
             body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate.'}/>),
]

export default Posts
