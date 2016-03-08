# blog-v4

[Preview](http://hcyue.me)

A blog system based on node.js, mongodb, react and redux, supporting isomorphic render.

## APIs

- `/api/article`
    queries: start, limit, summary, break, bodySource, body
    `GET`: Give <limit> number of articles start at <start> after sorted by time, together with `summary, break, bodySource, body` fields if queried.
    `POST`: Create new article.

- `/api/article/<id>`
    `GET`: Give the article `<id>`.
    `POST`: Update article `<id>`.

- `/api/page`
    `GET`: Give all pages.
    `POST`: Create new page.

- `/api/page/<title>`
    `GET`: Give page <title>
    `POST`: Update page <title>

- `/time`
    `GET`: Give all years since the first article published.

- `/archive/<year>`
    `GET`: Give all articles published in <year>

- `/tags`
    `GET`: Give all tags

- `/tags/<tag>`
    `GET`: Give all articles in tag <tag>
