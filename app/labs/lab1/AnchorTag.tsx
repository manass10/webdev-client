export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />

      {/* TODO (On your own): a site you visit often, and your own GitHub/LinkedIn */}
      <a href="https://canvas.northeastern.edu/" id="wd-your-link">
        https://canvas.northeastern.edu/
      </a>
      <br />
      <a
        href="https://github.com/"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
       https://www.linkedin.com/in/manas-salian/
      </a>
      <br />

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
