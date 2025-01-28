import pin from "../assets/pin.png";

const Entry = (entries) => {
  return (
    <>
  <section className="entry-con">
    <div className="entry-img-con">
      <img src={entries.img.src}  className="entry-img" alt={entries.img.alt}/>
    </div>
    
    <div className="entry-details-con">
      <div className="pin-country">
      <img src={pin} className="pin-con" />
      <div className="country">{entries.country}</div>
      <div className="maps"><a href={entries.googleMapsLink}>View on Google Maps</a></div>
      </div>

      <div className="entry-title-con">
        <div className="entry-title">{entries.title}</div>
        <div className="entry-dates">{entries.dates}</div>
        <div className="entry-text">{entries.text}</div>
      </div>
    </div>

  </section>
    </>

  );
}

export default Entry;