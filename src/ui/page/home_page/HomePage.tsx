import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
function HomePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("./abc.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  )
}

export { HomePage }