// contentlayer.config.ts
import {
  defineComputedFields,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = defineComputedFields({
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  readingTime: {
    type: "json",
    resolve: (doc) => {
      return readingTime(doc.body.raw);
    }
  }
});
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    tweetUrl: {
      type: "string",
      required: false
    },
    subtitle: {
      type: "string",
      required: false
    },
    bannerUrl: {
      type: "string",
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "post",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-dark"
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5TL2FWXJ.mjs.map
