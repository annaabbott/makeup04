const axios = require("axios");

async function getProductsByType(productType) {
  const result = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productType}`);
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
    dataSet[productType].sort((a, b) => b.rating - a.rating);
  }

  return dataSet;
}

const baseUrl = "/.netlify/functions/products";

function getProductType(url) {
  return url.substr(baseUrl.length + 1)
}

exports.handler = async function (event, context) {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const productType = getProductType(event.path);

  console.log("productType=" + productType)
  
  try {
    let data = await getProductsByType(productType);
    console.log("SUCCESS!");

    data = buildDataSet(data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log("request error", JSON.stringify(err));

    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
