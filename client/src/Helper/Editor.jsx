const Editor = () => {
  const handle = () => {};
  return (
    <div>
      <h1>Edtior</h1>
      <form onSubmit={handle}>
        <textarea id="mytextarea" name="text"></textarea>
        <button id="botton" name="submit">
          Ok
        </button>
      </form>
    </div>
  );
};

export default Editor;
