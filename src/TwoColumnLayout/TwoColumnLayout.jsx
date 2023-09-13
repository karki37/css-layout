import "./TwoColumnLayout.css"; //for imoorting css file

function TwoColumnLayout() {
  return (
    <div>
      <nav clasName={"navBar"}>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About Me">About Me</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <header>
        <h1>Let's explore the nature</h1>
      </header>

      <div className={"styles.pic1"}>
        <h2>Water flowing in forest</h2>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-waterfall-in-forest-newton-abbot-royalty-free-image-1681937445.jpg"
          alt="flowing water within stones"
        />
        <p>
          Observe the beauty of nature where you can see clear water in the
          forest with the green grass and stones.
        </p>
      </div>

      <div className={"styles.pic2"}>
        <h2>Colorful tree leaves</h2>
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
          alt="beauty of forest"
        />
        <p>
          Enjoy the color of forest and its trees. Walk around the forest and
          explore its beauty.
        </p>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
