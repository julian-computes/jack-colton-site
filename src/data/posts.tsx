import TextPost from "@/components/TextPost";

type PostData = {
  title: string;
  tag: tag;
  body: string;
};

const PostItems: PostData[] = [
  {
    title: "Lorem ipsum dolor sit",
    tag: "sound",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "visual",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "sound",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "sound",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "sound",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "sound",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "visual",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
  {
    title: "Lorem ipsum dolor sit",
    tag: "visual",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cumque debitis eveniet exercitationem illum ipsa laborum minima repellendus, voluptate! Excepturi illo laudantium libero maxime nihil nobis numquam quaerat voluptate",
  },
];

const Posts = PostItems.map((post, i) => (
  <TextPost title={post.title} body={post.body} tag={post.tag} key={i} />
));

export default Posts;
