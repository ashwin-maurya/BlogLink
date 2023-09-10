export default function BlogCard({ Key, label, imgURL, author }) {
  return (
    <div key={Key}>
      <img src={imgURL} alt="codeimg" />
      <h3>{label}</h3>
      <p>{author}</p>
    </div>
  );
}
