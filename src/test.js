import axios from "axios";

async function getProducts() {
  const result = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  return result.data;
}

function buildDataSet(data) {
  const dataSet = {};

  data.forEach((item) => {
    if (!(item.product_type in dataSet)) {
      dataSet[item.product_type] = [];
    }

    dataSet[item.product_type].push(item);
  });

  for (let productType in dataSet) {
    dataSet[productType].sort((a,b) => b.rating-a.rating)
  }

  return dataSet;
}

(async () => {
  const data = await getProducts();
  const dataTwo = buildDataSet(data);
  console.log(dataTwo);
})();

