import "../components/styles/ToolTipBox.scss";
import RightArrow from "../asset/icon/rightarrow.png";
import ExitButton from "../asset/icon/toolExitButton.png";
import SearchButton from "../asset/icon/toolSearchButton.png";

function ToolTipBox(props) {
  const {
    id,
    name,
    outside,
    pointX,
    pointY,
    priceDiscount,
    priceOriginal,
    productUrl,
    openBox,
  } = props;

  const handleTag = {
    top: pointX * 1.6,
    left: pointY * 1.6,
  };

  return (
    <div
      className="tag"
      id={id}
      style={handleTag}
      onClick={() => {
        openBox(id);
      }}
    >
      {true ? (
        <img src={SearchButton} alt="searchIcon" />
      ) : (
        <img src={ExitButton} alt="ExitButton" />
      )}
      <div className={`tool-tip-box hidden`} id={id}>
        <div className="tool-tip-contents">
          <div className="tool-tip-image">
            <img src={productUrl} alt="에틱타일" />
          </div>
          <div className="tool-tip-word">
            <div className="tool-tip-title">
              <h3 className="product-title">{name}</h3>
            </div>
            <div className="tool-tip-price">
              <span>예상가</span>
              <span>76,000</span>
            </div>
          </div>
          <div className="view-more-button">
            <img src={RightArrow} alt="moreView" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTipBox;
