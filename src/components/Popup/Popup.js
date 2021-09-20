import './Popup.css';

function Popup({openPopup, setOpenPopup, popupText}) {

    function closePopup() {
        setOpenPopup(false)
    }

  return (
    <div className="Popup">
        {openPopup && 
        <div className="Popup__background">
            <div className="Popup__container">
                <button className="Popup__button" onClick={closePopup}>ок</button>
                <p className="Popup__text">{popupText}</p>
            </div>
        </div>}
    </div>
  );
}

export default Popup;