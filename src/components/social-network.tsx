import RSSFeed from "./rss-fetch.tsx";

export default function Social() {
  return (
    <>
      <div class="row">
        <div class="col-10 offset-1">
          <h1>Instagram</h1>
        </div>
      </div>
      <RSSFeed url="https://rss.app/feeds/v1.1/UQTGGFPoBi78F72Y.json" />
    </>
  );
}

// https://rss.app/feeds/v1.1/UQTGGFPoBi78F72Y.json
