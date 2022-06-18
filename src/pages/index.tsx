import RichEditor from "../components/Editor/RichEditor";

const IndexPage = () => {
  return (
    <div>
      <RichEditor
        onChange={(state) => {
          localStorage.setItem("rich-editor-state", JSON.stringify(state));
        }}
      />
    </div>
  );
};

export default IndexPage;
