

function App() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [slugTitle, setSlugTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [blogViews, setBlogViews] = useState("");
  const [cpc, setCpc] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
const something = "text";
  const generateSlug = () => {
    return slugTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const keywordDensity = () => {
    if (!keyword || !text) return 0;
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;
    return wordCount ? ((count / wordCount) * 100).toFixed(2) : 0;
  };

  const adsenseEstimate = () => {
    const views = parseFloat(blogViews);
    const cpcValue = parseFloat(cpc);
    if (!views || !cpcValue) return 0;
    const ctr = 0.02;
    return (views * ctr * cpcValue).toFixed(2);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>🚀 Pro Blogger Tools Suite</h1>

      <hr />

      <h2>Word & Character Counter</h2>
      <textarea
        rows="5"
        style={{ width: "100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tulis artikel..."
      />
      <p>Kata: {wordCount} | Karakter: {charCount}</p>

      <hr />

      <h2>Keyword Density</h2>
      <input
        style={{ width: "100%" }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Keyword utama"
      />
      <p>Density: {keywordDensity()}%</p>

      <hr />

      <h2>Slug Generator</h2>
      <input
        style={{ width: "100%" }}
        value={slugTitle}
        onChange={(e) => setSlugTitle(e.target.value)}
        placeholder="Judul artikel"
      />
      <p>Slug: {generateSlug()}</p>

      <hr />

      <h2>Meta Preview</h2>
      <input
        style={{ width: "100%" }}
        value={metaTitle}
        onChange={(e) => setMetaTitle(e.target.value)}
        placeholder="Meta title (60 karakter)"
      />
      <textarea
        rows="3"
        style={{ width: "100%" }}
        value={metaDesc}
        onChange={(e) => setMetaDesc(e.target.value)}
        placeholder="Meta description (160 karakter)"
      />
      <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
        <strong>{metaTitle.slice(0, 60)}</strong>
        <p>www.domainkamu.com/{generateSlug()}</p>
        <p>{metaDesc.slice(0, 160)}</p>
      </div>

      <hr />

      <h2>AdSense Revenue Calculator</h2>
      <input
        type="number"
        style={{ width: "100%" }}
        value={blogViews}
        onChange={(e) => setBlogViews(e.target.value)}
        placeholder="Total Pageviews / bulan"
      />
      <input
        type="number"
        style={{ width: "100%" }}
        value={cpc}
        onChange={(e) => setCpc(e.target.value)}
        placeholder="Estimasi CPC (USD)"
      />
      <p>Estimasi Penghasilan: ${adsenseEstimate()} / bulan</p>
    </div>
  );
}

export default App;
