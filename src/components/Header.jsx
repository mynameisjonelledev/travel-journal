import GlobeAsia from "../assets/GlobeAsia.png";

const Header = () => {
  return (
    <>
    <header className="header-con">

    <div className="logo-and-title">
      <img src={GlobeAsia} alt="Globe Asia" className="globe-logo"/>
      <span className="title-span">my travel journal</span>
    </div>

    </header>
    </>

  );
}

export default Header;