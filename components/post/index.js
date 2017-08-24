import { Link } from "../../routes";

const PostItem = ({ post }) =>
  <div>
    <Link route="post" params={{ slug: post.fields.slug }}>
      <a>
        <h2 className="mb-4">
          {post.fields.title}
        </h2>
      </a>
    </Link>
    <p>
      {post.fields.body.replace(/<[/]?p>/g, "")}
    </p>
    <style jsx>
      {`
        a {
          color: #333;
        }

        a:hover {
          color: #ff2d55;
          text-decoration: none;
        }

        p {
          font-size: 16px;
          line-height: 1.5;
        }
      `}
    </style>
  </div>;

export default PostItem;
