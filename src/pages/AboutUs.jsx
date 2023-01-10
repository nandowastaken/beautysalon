import "../styles/AboutUs.css";
import aboutUsImage from "../assets/about-us-img.svg";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <img src={aboutUsImage} alt="" className="about-us-img" />

      <div className="about-us-info">
        <h2 className="about-us-info-title">Sobre nós</h2>

        <div className="about-us-info-desc">
          <p className="about-us-info-desc-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus.{" "}
          </p>
          <p className="about-us-info-desc-2">
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed.{" "}
          </p>
          <p className="about-us-info-desc-3">
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
            rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
            tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
            nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
            dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>
    </div>
  );
}
