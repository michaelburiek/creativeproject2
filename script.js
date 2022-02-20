document.getElementById("cryptoSearchSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const cryptoTicker = document.getElementById("cryptoTickerInput").value;
  console.log(cryptoTicker);
  const multiplier = document.getElementById("multiplierInput").value;
  console.log(multiplier);
  const timespan = document.getElementById("timespanInput").value;
  console.log(timespan);
  const from = document.getElementById("fromInput").value;
  console.log(from);
  const to = document.getElementById("toInput").value;
  console.log(to);
  //if (value === "")
    //return;

  //let url = "https://api.polygon.io/v2/aggs/ticker/cryptoTicker/range/multiplier/timespan/from/to?adjusted=true&sort=asc&limit=120&apiKey=fSFWGZnAAX_9ROoxelYbVqpNzpARpsiT";
  let url = "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2021-02-18/2021-02-18?adjusted=true&sort=asc&limit=120&apiKey=fSFWGZnAAX_9ROoxelYbVqpNzpARpsiT";
  fetch(url).then(response => response.json())
  .then(function(json) {
    let results = " ";
    results =
    `
      <div>
          <div>
            <div>OPEN</div>
            <div>$${new Intl.NumberFormat().format(json.results[0].o)}</div>
          </div>

          <div>
            <div>CLOSE</div>
            <div>$${new Intl.NumberFormat().format(json.results[0].c)}
          </div>

          <div>
            <div>LOWEST</div>
            <div>$${new Intl.NumberFormat().format(json.results[0].l)}</div>
          </div>

          <div>
            <div>HIGHEST</div>
            <div>$${new Intl.NumberFormat().format(json.results[0].h)}</div>
          </div>

          <div>
            <div>VOLUME</div>
            <div>${new Intl.NumberFormat().format(json.results[0].v)}</div>
          </div>

      </div>
    `
    document.getElementById("cryptoResults").innerHTML = results;
  });

});
