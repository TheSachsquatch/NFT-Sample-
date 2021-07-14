const pinataApiKey = "edce61e6d979baa2d815";
const pinataSecretApiKey = "e169ecef21986baa3754ef4878f89dc2d45c7ccf56dbca52f489d801022dbc82";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream("C:\Users\Sachin\Pictures\portfolio\Sized Files\Mandalorian Helmet.jpg"));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });
  console.log(res.data);
};
pinFileToIPFS();