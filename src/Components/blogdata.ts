interface PostType {
  slug: string;
  title: string;
  content: string;
  author: string;
}

export const blogdata: Array<PostType> = [];
blogdata.push({
  title: "Que es React",
  slug: "que-es-react",
  content: "React es el mejor framework",
  author: "xavicci",
});
blogdata.push({
  title: "Que es Vue",
  slug: "que-es-vue",
  content: "Vue es el mejor framework",
  author: "xavicci669",
});
blogdata.push({
  title: "Que es Angular",
  slug: "que-es-angular",
  content: "Angular es el mejor framework",
  author: "xaviccixd",
});
