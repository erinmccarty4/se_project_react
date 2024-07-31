import "./itemModal.css";

function ItemModal({ activeModal, card, onClose, onDelete }) {
  
  const handleDeleteCardClick = () => {
    onDelete(card._id);
  };

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img src={card.imageUrl}
         alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button
            type="button"
            className="modal__delete-btn"
            onClick={handleDeleteCardClick}
          >Delete item
          </button>
      </div>
    </div>
  );
}

export default ItemModal;