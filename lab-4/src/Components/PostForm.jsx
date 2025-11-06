export default function PostForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            value={props.newPost.title}
            onChange={props.handleChange}
          />
        </label>

        <br />

        <label>
          Body:
          <input
            name="body"
            value={props.newPost.body}
            onChange={props.handleChange}
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
