export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot" 
      />

      <br />
      <img
        id="wd-your-image"
        width="200px"
        alt="This is humanoid robot Optimus, developed by Tesla, Inc."
        src="https://via.placeholder.com/300x200?text=Replace+me"
      />

      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="NASA logo"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/nasa-logo-web-rgb.png"
      />
    </div>
  );
}
