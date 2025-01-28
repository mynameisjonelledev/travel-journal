import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {

  const entryElements = data.map((entry) => {
    return (
      <Entry 
        key = {entry.id}
        img = {entry.img}
        title = {entry.title}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLink}
        dates = {entry.dates}
        text = {entry.text}
      />

    );
  });

  return (
    <>
    <Header />
    {entryElements}
    </>

  );
}

export default App;