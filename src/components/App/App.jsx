// import logo from "../../images/logo.svg";
// import "./App.css";
// import Header from "../Header/Header.jsx";
// import Main from "../Main/Main";
// import Footer from "../Footer/Footer.jsx";
// import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
// import { useEffect, useState } from "react";
// import ItemModal from "../ItemModal/ItemModal";
// import { getForcastWeather, parseWeatherData } from "../../utils/WeatherApi";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";
// import { Switch, Route } from "react-router-dom";
// import AddItemModal from "../AddItemModal/AddItemModal";
// import SideBar from "../SideBar/SideBar";
// import ClothesSection from "../ClothesSection/ClothesSection";
// import { defaultClothingItems } from "../../utils/constants.jsx";
// import { addItems, getItems } from "../../utils/Api.jsx";

// function App() {
//   const weatherTemp = "30";
//   const [activeModal, setActiveModal] = useState("");
//   const [selectedCard, setSelectedCard] = useState({});
//   const [temp, setTemp] = useState(0);
//   const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

//   const handleCreateModal = () => {
//     setActiveModal("create");
//   };

//   const handleCloseModal = () => {
//     setActiveModal("");
//   };

//   const handleSelectedCard = (card) => {
//     setActiveModal("preview");
//     setSelectedCard(card);
//   };

//   const onAddItem = (values) => {
//     // e.preventDefault ();
//     console.log(values);

//     addItems({
//       name: "Max was here",
//       weather: "hot",
//       imageUrl:
//         "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
//     }).then((item) => {
//       console.log(item);
//     });
//   };

//   const handleAddNewGarment = () => {
//     setActiveModal("add-garment");
//   };

//   const handleCardClick = (card) => {
//     setActiveModal("preview");
//     setSelectedCard(card);
//   };

//   const handleCloseClick = () => {};

//   const handleToggleSwitchChange = () => {
//     if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
//     if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
//   };
//   useEffect(() => {
//     getForcastWeather().then((data) => {
//       console.log(data);
//       const temperature = parseWeatherData(data);
//       setTemp(temperature);
//     });

//     getItems().then((items) => {
//       console.log(items);
//     });
//   }, []);

//   return (
//     <div>
//       <CurrentTemperatureUnitContext.Provider
//         value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
//         <Header onCreateModal={handleCreateModal} temp={temp} />
//         <Switch>
//           <Route exact path='/'>
//             <Main weatherTemp={temp} onselectCard={handleSelectedCard} />
//           </Route>
//           <Route path='/profile'>
//             <div style={{ display: "flex" }}>
//               <SideBar />
//               <ClothesSection
//                 handleCardClick={handleCardClick}
//                 clothingItems={defaultClothingItems}
//                 handleAddNewGarment={handleAddNewGarment}
//               />
//             </div>
//           </Route>
//         </Switch>

//         <Footer />

//         <AddItemModal
//           handleCloseModal={handleCloseModal}
//           isOpen={activeModal === "create"}
//           onAddItem={onAddItem}
//         />
//         {/* {activeModal === "create" && <AddItemModal
//        handleCloseModal={handleCloseModal}
//         isOpen={activeModal=== "create"} 
//         onAddItem={onAddItem}/>} */}
//         {activeModal === "preview" && (
//           <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
//         )}
//       </CurrentTemperatureUnitContext.Provider>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

import "../App/App.css";

import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, deleteItem, addItem } from "../../utils/Api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values, onDone) => {
    //first add item to the server, then to the dom
    return addItem(values)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
        onDone();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    return deleteItem(id)
      .then(() => {
        const updatedClothingItems = clothingItems.filter(
          (item) => item._id !== id
        );
        setClothingItems(updatedClothingItems);
      })
      .catch((error) => {
        console.error("Error deleting this item", error);
      });
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        //data is the json response
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter basename="/se_project_react">
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="app__content">
            <Header handleAddClick={handleAddClick} weatherData={weatherData} />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                    handleAddClick={handleAddClick}
                  />
                }
              />
            </Routes>

            <Footer />
          </div>
          {activeModal === "add-garment" && (
            <AddItemModal
              handleCloseModal={closeActiveModal}
              isOpen={activeModal === "add-garment"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              onClose={closeActiveModal}
              handleDeleteItem={handleDeleteItem}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;