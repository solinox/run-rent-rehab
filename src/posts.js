import all from '../posts/*.md'

export const allPosts = (all || [])
  .map(({ filename, html, metadata }) => ({
    ...metadata,
    filename,
    html,
    permalink: filename.replace(/\.md$/, '').replace(/\s+/g, '-').toLowerCase(),
    keywords: metadata.keywords || [],
    date: new Date(metadata.date),
    start: metadata.start && new Date(metadata.start),
    end: metadata.end && new Date(metadata.end),
  }));

export const posts = allPosts
  .filter(({ start, end }) => {
    const now = new Date();
    return (!start || now >= start) && (!end || now <= end);
  });

export function findPost(permalink) {
  return posts.find(post => post.permalink === permalink);
}
