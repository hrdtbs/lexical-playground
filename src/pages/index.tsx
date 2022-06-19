import RichEditor from "../components/Editor/RichEditor";

const IndexPage = () => {
  return (
    <div>
      <RichEditor
        onChange={(state, editor) => {
          console.log(state, editor);
        }}
      />
    </div>
  );
};

export default IndexPage;
