document.getElementById("cryptoSearchSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const cryptoTicker = document.getElementById("cryptoTickerInput").value;
  const multiplier = document.getElementById("multiplierInput").value;
  const timespan = document.getElementById("timespanInput").value;
  const from = document.getElementById("fromInput").value;
  const to = document.getElementById("toInput").value;
  //if (value === "")
  //  return;

  // let url = "https://api.polygon.io/v2/aggs/ticker/cryptoTicker/range/multiplier/timespan/from/to?adjusted=true&sort=asc&limit=120&apiKey=fSFWGZnAAX_9ROoxelYbVqpNzpARpsiT";
  let url = "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2022-02-18/2022-02-18?adjusted=true&sort=asc&limit=120&apiKey=fSFWGZnAAX_9ROoxelYbVqpNzpARpsiT";
  fetch(url).then(response => response.json())
  .then(function(json) {
    let results = " ";
    results =
    `
      <div class="crypto-results-container">
      <table>
        <tr class="crypto-results-tr">
          <th>OPEN</th>
          <th>CLOSE</th>
          <th>LOWEST</th>
          <th>HIGHEST</th>
          <th>VOLUME</th>
        </tr>
        <tr class="crypto-results-tr">
          <td>$${new Intl.NumberFormat().format(json.results[0].o)}</td>
          <td>$${new Intl.NumberFormat().format(json.results[0].c)}</td>
          <td>$${new Intl.NumberFormat().format(json.results[0].l)}</td>
          <td>$${new Intl.NumberFormat().format(json.results[0].h)}</td>
          <td>${new Intl.NumberFormat().format(json.results[0].v)}</td>
        </tr>
      </table>
      </div>
    `
    document.getElementById("cryptoResults").innerHTML = results;
  });

});
