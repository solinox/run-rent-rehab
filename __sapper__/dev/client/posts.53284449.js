var Mod0 = {"html":"<h2 id=\"run-_verb_\">Run <em>(verb)</em></h2>\n<p>To move at a speed faster than a walk, never having both or all the feet on the ground at the same time.</p>\n<h2 id=\"rent-_noun_\">Rent <em>(noun)</em></h2>\n<p>A tenant's regular payment to a landlord for the use of property or land.</p>\n<h2 id=\"rehab-_verb_\">Rehab <em>(verb)</em></h2>\n<p>To rehabilitate or restore</p>\n<h2 id=\"runrentrehab-_noun_\">Run~Rent~Rehab <em>(noun)</em></h2>\n<p>A virtual place where I get to share my passions; through tips, tricks, stories, and DIY tutorials. I love to restore life to older/used items (specifically houses), that I can then turn into long term rentals. When I'm not too busy with real estate, I love to feel the wind in my hair running outside.</p>\n<hr />\n<p>Thanks for visiting my page, and I'm excited to share these parts of my life with you!</p>","metadata":{"title":"First Post","summary":"A short post about  ...","date":"2020-09-07T00:00:00.000Z"},"filename":"first-post.md","path":"/home/bosch/code/run-rent-rehab/posts/first-post.md"};

var all = [
  Mod0
];

const allPosts = (all || [])
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

const posts = allPosts
  .filter(({ start, end }) => {
    const now = new Date();
    return (!start || now >= start) && (!end || now <= end);
  });

function findPost(permalink) {
  return posts.find(post => post.permalink === permalink);
}

export { findPost as f, posts as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuNTMyODQ0NDkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLyQkX19fJCQ3YmFkMmUwY2U3M2RkZjY3MjdhZjBkMjM5Y2MzNjZhZiIsIi4uLy4uLy4uL3NyYy9wb3N0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kMCBmcm9tICcvaG9tZS9ib3NjaC9jb2RlL3J1bi1yZW50LXJlaGFiL3Bvc3RzL2ZpcnN0LXBvc3QubWQnO1xuZXhwb3J0IGRlZmF1bHQgW1xuICBNb2QwXG5dOyIsImltcG9ydCBhbGwgZnJvbSAnLi4vcG9zdHMvKi5tZCdcblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzID0gKGFsbCB8fCBbXSlcbiAgLm1hcCgoeyBmaWxlbmFtZSwgaHRtbCwgbWV0YWRhdGEgfSkgPT4gKHtcbiAgICAuLi5tZXRhZGF0YSxcbiAgICBmaWxlbmFtZSxcbiAgICBodG1sLFxuICAgIHBlcm1hbGluazogZmlsZW5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpLFxuICAgIGtleXdvcmRzOiBtZXRhZGF0YS5rZXl3b3JkcyB8fCBbXSxcbiAgICBkYXRlOiBuZXcgRGF0ZShtZXRhZGF0YS5kYXRlKSxcbiAgICBzdGFydDogbWV0YWRhdGEuc3RhcnQgJiYgbmV3IERhdGUobWV0YWRhdGEuc3RhcnQpLFxuICAgIGVuZDogbWV0YWRhdGEuZW5kICYmIG5ldyBEYXRlKG1ldGFkYXRhLmVuZCksXG4gIH0pKTtcblxuZXhwb3J0IGNvbnN0IHBvc3RzID0gYWxsUG9zdHNcbiAgLmZpbHRlcigoeyBzdGFydCwgZW5kIH0pID0+IHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiAoIXN0YXJ0IHx8IG5vdyA+PSBzdGFydCkgJiYgKCFlbmQgfHwgbm93IDw9IGVuZCk7XG4gIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBvc3QocGVybWFsaW5rKSB7XG4gIHJldHVybiBwb3N0cy5maW5kKHBvc3QgPT4gcG9zdC5wZXJtYWxpbmsgPT09IHBlcm1hbGluayk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxVQUFlO0FBQ2YsRUFBRSxJQUFJO0FBQ04sQ0FBQzs7QUNETSxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQ2xDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNO0FBQzFDLElBQUksR0FBRyxRQUFRO0FBQ2YsSUFBSSxRQUFRO0FBQ1osSUFBSSxJQUFJO0FBQ1IsSUFBSSxTQUFTLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUU7QUFDL0UsSUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFO0FBQ3JDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDakMsSUFBSSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQ3JELElBQUksR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ047QUFDWSxNQUFDLEtBQUssR0FBRyxRQUFRO0FBQzdCLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUs7QUFDOUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzNCLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQzVELEdBQUcsRUFBRTtBQUNMO0FBQ08sU0FBUyxRQUFRLENBQUMsU0FBUyxFQUFFO0FBQ3BDLEVBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0FBQzFEOzs7OyJ9
