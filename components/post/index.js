import { Link } from "../../routes";

const PostItem = ({ post }) =>
  <div>
    <Link route="post" params={{ slug: post.fields.slug }}>
      <a>
        <h3>
          {post.fields.title}
        </h3>
      </a>
    </Link>
    <p>
      {post.fields.body.replace(/<[/]?p>/g, "")}
    </p>
  </div>;

export default PostItem;
