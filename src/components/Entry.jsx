import pin from "../assets/pin.png";

const Entry = () => {
  return (
    <>
  <section className="entry-con">
    <div className="entry-img-con">
      <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080"  className="entry-img"/>
    </div>
    
    <div className="entry-details-con">
      <div className="pin-country">
      <img src={pin} className="pin-con" />
      <div className="country">JAPAN</div>
      <div className="maps"><a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a></div>
      </div>

      <div className="entry-title-con">
        <div className="entry-title">Mount Fuji</div>
        <div className="entry-dates">12 Jan, 2025 - 24 Jan, 2025</div>
        <div className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</div>
      </div>
    </div>

  </section>
    </>

  );
}

export default Entry;