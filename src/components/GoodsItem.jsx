export default function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card large" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>
          {!displayDescription
            ? 'No description for this product '
            : displayDescription}
        </p>
      </div>
      <div className="card-action">
        <button
          className="btn indigo lighten-1"
          type="button"
          onClick={() => addToBasket({ mainId, displayName, price })}
        >
          Buy
        </button>
        <span className="card-price right">{price.regularPrice} usd.</span>
      </div>
    </div>
  );
}
