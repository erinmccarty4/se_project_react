import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({
  handleCardClick,
  handleAddClick,
  defaultClothingItems,
  isLoggedIn,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = defaultClothingItems?.filter(
    (item) => item.owner === currentUser?._id
  );
  //are the default items breaking here?
  return (
    <div className="clothes-section">
      <div className="clothes-section__buttons">
        <p>Your Items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__add-item-btn"
        >
          + Add New
        </button>
      </div>
      <div className="break">
        <ul className="clothes-section__items">
          {userItems?.map((item) => {
            return (
              <ItemCard
                key={item._id || item.id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default ClothesSection;
