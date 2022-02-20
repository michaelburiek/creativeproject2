document.getElementById("cryptoSearchSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const cryptoTicker = document.getElementById("cryptoTickerInput").value;
  const multiplier = document.getElementById("multiplierInput").value;
  const timespan = document.getElementById("timespanInput").value;
  const from = document.getElementById("fromInput").value;
  const to = document.getElementById("toInput").value;
  if (cryptoTicker === "")
    return;

  let url = `https://api.polygon.io/v2/aggs/ticker/${cryptoTicker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=true&sort=asc&limit=120&apiKey=fSFWGZnAAX_9ROoxelYbVqpNzpARpsiT`;
  // let url = "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2021-02-18/2021-02-18?adjusted=true&sort=asc&limit=120&apiKey=fSFWGZnAAX_9ROoxelYbVqpNzpARpsiT";
  fetch(url).then(response => response.json())
  .then(function(json) {
    let results = " ";
    results =
    `
      <div class="crypto-results-container">
          <div class="crypto-results-item">
            <div>OPEN: </div>
            <div> $${new Intl.NumberFormat().format(json.results[0].o)}</div>
          </div>

          <div class="crypto-results-item">
            <div>CLOSE: </div>
            <div> $${new Intl.NumberFormat().format(json.results[0].c)}</div>
          </div>

          <div class="crypto-results-item">
            <div>LOWEST: </div>
            <div> $${new Intl.NumberFormat().format(json.results[0].l)}</div>
          </div>

          <div class="crypto-results-item">
            <div>HIGHEST: </div>
            <div> $${new Intl.NumberFormat().format(json.results[0].h)}</div>
          </div>

          <div class="crypto-results-item">
            <div>VOLUME: </div>
            <div> ${new Intl.NumberFormat().format(json.results[0].v)}</div>
          </div>

      </div>
    `
    document.getElementById("cryptoResults").innerHTML = results;
  });

});
