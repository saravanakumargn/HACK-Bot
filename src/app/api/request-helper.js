// import axios from 'axios';
const axios = require('axios');
const fetch = require('node-fetch');


const fetchData = async (url, parameters = {}) => {
  // fetch('http://datamall2.mytransport.sg/ltaodataservice/Traffic-Images', {
  //   method: 'GET',
  //   // body:    JSON.stringify(body),
  //   headers: { 'Content-Type': 'application/json', AccountKey: 'kzlesW8dS92tEC31eTEYVw==' },
  // })
  //   .then(res => res.text())
  //   .then(body => console.log(body));
  return {results: results};
}

const results = {
  "odata.metadata": "http://datamall2.mytransport.sg/ltaodataservice/$metadata#CameraImageSet",
  "value": [
    {
      "CameraID": "1001",
      "Latitude": 1.29531332,
      "Longitude": 103.871146,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1001_2043_20190718204806_fd695d.jpg"
    },
    {
      "CameraID": "1002",
      "Latitude": 1.319541067,
      "Longitude": 103.8785627,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1002_2038_20190718204400_50cec4.jpg"
    },
    {
      "CameraID": "1003",
      "Latitude": 1.323957439,
      "Longitude": 103.8728576,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1003_2038_20190718204400_ba3b20.jpg"
    },
    {
      "CameraID": "1004",
      "Latitude": 1.319535712,
      "Longitude": 103.8750668,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1004_2038_20190718204400_6a28b7.jpg"
    },
    {
      "CameraID": "1005",
      "Latitude": 1.363519886,
      "Longitude": 103.905394,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1005_2038_20190718204400_6c09d0.jpg"
    },
    {
      "CameraID": "1006",
      "Latitude": 1.357098686,
      "Longitude": 103.902042,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1006_2038_20190718204400_3b03fa.jpg"
    },
    {
      "CameraID": "1501",
      "Latitude": 1.27414394350065,
      "Longitude": 103.851316802547,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1501_2038_20190718204504_2827d3.jpg"
    },
    {
      "CameraID": "1502",
      "Latitude": 1.27135090682664,
      "Longitude": 103.861828440597,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1502_2038_20190718204500_8f2ba7.jpg"
    },
    {
      "CameraID": "1503",
      "Latitude": 1.27066408655104,
      "Longitude": 103.856977943394,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1503_2038_20190718204500_7cb3d2.jpg"
    },
    {
      "CameraID": "1504",
      "Latitude": 1.29409891409364,
      "Longitude": 103.876056196568,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1504_2038_20190718204500_266a7b.jpg"
    },
    {
      "CameraID": "1505",
      "Latitude": 1.2752977149006,
      "Longitude": 103.866390381759,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1505_2038_20190718204500_d45c55.jpg"
    },
    {
      "CameraID": "1701",
      "Latitude": 1.323604823,
      "Longitude": 103.8587802,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1701_2046_20190718204900_452265.jpg"
    },
    {
      "CameraID": "1702",
      "Latitude": 1.34355015,
      "Longitude": 103.8601984,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1702_2047_20190718204900_6fbcdd.jpg"
    },
    {
      "CameraID": "1703",
      "Latitude": 1.32814722194857,
      "Longitude": 103.862203282048,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1703_2045_20190718204800_453267.jpg"
    },
    {
      "CameraID": "1704",
      "Latitude": 1.28569398886979,
      "Longitude": 103.837524510188,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1704_2047_20190718204900_12e55d.jpg"
    },
    {
      "CameraID": "1705",
      "Latitude": 1.375925022,
      "Longitude": 103.8587986,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1705_2047_20190718204900_ac5db7.jpg"
    },
    {
      "CameraID": "1706",
      "Latitude": 1.38861,
      "Longitude": 103.85806,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1706_2047_20190718204900_cdc480.jpg"
    },
    {
      "CameraID": "1707",
      "Latitude": 1.28036584335876,
      "Longitude": 103.830451146503,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1707_2045_20190718204700_29011f.jpg"
    },
    {
      "CameraID": "1709",
      "Latitude": 1.31384231654635,
      "Longitude": 103.845603032574,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1709_2046_20190718204800_e08e94.jpg"
    },
    {
      "CameraID": "1711",
      "Latitude": 1.35296,
      "Longitude": 103.85719,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/1711_2047_20190718204900_eaba7d.jpg"
    },
    {
      "CameraID": "2701",
      "Latitude": 1.447023728,
      "Longitude": 103.7716543,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2701_2047_20190718204900_b2cd81.jpg"
    },
    {
      "CameraID": "2702",
      "Latitude": 1.445554109,
      "Longitude": 103.7683397,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2702_2047_20190718204900_e653f5.jpg"
    },
    {
      "CameraID": "2703",
      "Latitude": 1.35047790791386,
      "Longitude": 103.791033581325,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2703_2045_20190718204800_e8f859.jpg"
    },
    {
      "CameraID": "2704",
      "Latitude": 1.429588536,
      "Longitude": 103.769311,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2704_2045_20190718204801_79d209.jpg"
    },
    {
      "CameraID": "2705",
      "Latitude": 1.36728572,
      "Longitude": 103.7794698,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2705_2046_20190718204801_05d841.jpg"
    },
    {
      "CameraID": "2706",
      "Latitude": 1.414142,
      "Longitude": 103.771168,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2706_2046_20190718204801_4e99a0.jpg"
    },
    {
      "CameraID": "2707",
      "Latitude": 1.3983,
      "Longitude": 103.774247,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2707_2046_20190718204801_0059ba.jpg"
    },
    {
      "CameraID": "2708",
      "Latitude": 1.3865,
      "Longitude": 103.7747,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/2708_2042_20190718204500_2bc2dd.jpg"
    },
    {
      "CameraID": "3702",
      "Latitude": 1.33831,
      "Longitude": 103.98032,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3702_2045_20190718204801_fb0b7f.jpg"
    },
    {
      "CameraID": "3704",
      "Latitude": 1.2958550156561,
      "Longitude": 103.880314665981,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3704_2046_20190718204801_2eecd2.jpg"
    },
    {
      "CameraID": "3705",
      "Latitude": 1.32743,
      "Longitude": 103.97383,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3705_2045_20190718204801_5e4836.jpg"
    },
    {
      "CameraID": "3793",
      "Latitude": 1.309330837,
      "Longitude": 103.9350504,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3793_2046_20190718204801_380787.jpg"
    },
    {
      "CameraID": "3795",
      "Latitude": 1.30145145166066,
      "Longitude": 103.910596320237,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3795_2046_20190718204801_dc03cc.jpg"
    },
    {
      "CameraID": "3796",
      "Latitude": 1.297512569,
      "Longitude": 103.8983019,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3796_2045_20190718204801_b6aeb0.jpg"
    },
    {
      "CameraID": "3797",
      "Latitude": 1.29565733262976,
      "Longitude": 103.885283049309,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3797_2046_20190718204801_db21f2.jpg"
    },
    {
      "CameraID": "3798",
      "Latitude": 1.29158484,
      "Longitude": 103.8615987,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/3798_2046_20190718204801_0b54a1.jpg"
    },
    {
      "CameraID": "4701",
      "Latitude": 1.2871,
      "Longitude": 103.79633,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4701_2045_20190718204802_f9ca49.jpg"
    },
    {
      "CameraID": "4702",
      "Latitude": 1.27237,
      "Longitude": 103.8324,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4702_2046_20190718204802_d9b5e3.jpg"
    },
    {
      "CameraID": "4703",
      "Latitude": 1.348697862,
      "Longitude": 103.6350413,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4703_2045_20190718204700_e5ca18.jpg"
    },
    {
      "CameraID": "4704",
      "Latitude": 1.27877,
      "Longitude": 103.82375,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4704_2046_20190718204801_cd4261.jpg"
    },
    {
      "CameraID": "4705",
      "Latitude": 1.32618,
      "Longitude": 103.73028,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4705_2046_20190718204801_ff97b6.jpg"
    },
    {
      "CameraID": "4706",
      "Latitude": 1.29792,
      "Longitude": 103.78205,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4706_2046_20190718204802_2e7c7e.jpg"
    },
    {
      "CameraID": "4707",
      "Latitude": 1.33344648135658,
      "Longitude": 103.652700847056,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4707_2046_20190718204802_d89c70.jpg"
    },
    {
      "CameraID": "4708",
      "Latitude": 1.29939,
      "Longitude": 103.7799,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4708_2046_20190718204802_a08f5c.jpg"
    },
    {
      "CameraID": "4709",
      "Latitude": 1.312019,
      "Longitude": 103.763002,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4709_2045_20190718204802_084397.jpg"
    },
    {
      "CameraID": "4710",
      "Latitude": 1.32153,
      "Longitude": 103.75273,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4710_2046_20190718204802_758070.jpg"
    },
    {
      "CameraID": "4712",
      "Latitude": 1.341244001,
      "Longitude": 103.6439134,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4712_2045_20190718204802_ef6229.jpg"
    },
    {
      "CameraID": "4713",
      "Latitude": 1.347645829,
      "Longitude": 103.6366955,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4713_2047_20190718204900_997aa2.jpg"
    },
    {
      "CameraID": "4714",
      "Latitude": 1.31023,
      "Longitude": 103.76438,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4714_2046_20190718204802_245957.jpg"
    },
    {
      "CameraID": "4716",
      "Latitude": 1.32227,
      "Longitude": 103.67453,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4716_2046_20190718204802_116262.jpg"
    },
    {
      "CameraID": "4798",
      "Latitude": 1.25999999687243,
      "Longitude": 103.823611110166,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4798_2046_20190718204802_b69a70.jpg"
    },
    {
      "CameraID": "4799",
      "Latitude": 1.26027777363278,
      "Longitude": 103.823888890049,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/4799_2046_20190718204802_26356d.jpg"
    },
    {
      "CameraID": "5794",
      "Latitude": 1.3309693,
      "Longitude": 103.9168616,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/5794_2045_20190718204802_56621e.jpg"
    },
    {
      "CameraID": "5795",
      "Latitude": 1.326024822,
      "Longitude": 103.905625,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/5795_2045_20190718204802_9d39d2.jpg"
    },
    {
      "CameraID": "5797",
      "Latitude": 1.322875288,
      "Longitude": 103.8910793,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/5797_2045_20190718204802_07c124.jpg"
    },
    {
      "CameraID": "5798",
      "Latitude": 1.32036078126842,
      "Longitude": 103.877174116489,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/5798_2046_20190718204802_96ee19.jpg"
    },
    {
      "CameraID": "5799",
      "Latitude": 1.328171608,
      "Longitude": 103.8685191,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/5799_2045_20190718204802_7531cd.jpg"
    },
    {
      "CameraID": "6701",
      "Latitude": 1.329334,
      "Longitude": 103.858222,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6701_2044_20190718204504_5ca5bc.jpg"
    },
    {
      "CameraID": "6703",
      "Latitude": 1.328899,
      "Longitude": 103.84121,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6703_2046_20190718204802_cb7aa7.jpg"
    },
    {
      "CameraID": "6704",
      "Latitude": 1.32657403632366,
      "Longitude": 103.826857295633,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6704_2046_20190718204802_f9c763.jpg"
    },
    {
      "CameraID": "6705",
      "Latitude": 1.332124,
      "Longitude": 103.81768,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6705_2046_20190718204803_22f255.jpg"
    },
    {
      "CameraID": "6706",
      "Latitude": 1.349428893,
      "Longitude": 103.7952799,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6706_2045_20190718204802_586143.jpg"
    },
    {
      "CameraID": "6708",
      "Latitude": 1.345996,
      "Longitude": 103.69016,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6708_2046_20190718204803_ecdda7.jpg"
    },
    {
      "CameraID": "6710",
      "Latitude": 1.344205,
      "Longitude": 103.78577,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6710_2045_20190718204803_c3cdcf.jpg"
    },
    {
      "CameraID": "6711",
      "Latitude": 1.33771,
      "Longitude": 103.977827,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6711_2045_20190718204803_384a5e.jpg"
    },
    {
      "CameraID": "6712",
      "Latitude": 1.332691,
      "Longitude": 103.770278,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6712_2046_20190718204803_875731.jpg"
    },
    {
      "CameraID": "6713",
      "Latitude": 1.340298,
      "Longitude": 103.945652,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6713_2046_20190718204803_595845.jpg"
    },
    {
      "CameraID": "6714",
      "Latitude": 1.361742,
      "Longitude": 103.703341,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6714_2046_20190718204803_023bb1.jpg"
    },
    {
      "CameraID": "6715",
      "Latitude": 1.356299,
      "Longitude": 103.716071,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6715_2046_20190718204803_ec288b.jpg"
    },
    {
      "CameraID": "6716",
      "Latitude": 1.322893,
      "Longitude": 103.663505,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/6716_2045_20190718204803_2ddf6d.jpg"
    },
    {
      "CameraID": "7791",
      "Latitude": 1.354245,
      "Longitude": 103.963782,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7791_2046_20190718204803_c1d1da.jpg"
    },
    {
      "CameraID": "7793",
      "Latitude": 1.37704704,
      "Longitude": 103.92946983,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7793_2045_20190718204803_8d7f82.jpg"
    },
    {
      "CameraID": "7794",
      "Latitude": 1.37988658,
      "Longitude": 103.92009174,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7794_2046_20190718204803_285c2e.jpg"
    },
    {
      "CameraID": "7795",
      "Latitude": 1.38432741,
      "Longitude": 103.91585701,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7795_2045_20190718204803_2bb02b.jpg"
    },
    {
      "CameraID": "7796",
      "Latitude": 1.39559294,
      "Longitude": 103.90515712,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7796_2046_20190718204803_359916.jpg"
    },
    {
      "CameraID": "7797",
      "Latitude": 1.40002575,
      "Longitude": 103.85702534,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7797_2046_20190718204803_91fa0c.jpg"
    },
    {
      "CameraID": "7798",
      "Latitude": 1.39748842,
      "Longitude": 103.85400467,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/7798_2045_20190718204804_f2b45e.jpg"
    },
    {
      "CameraID": "8701",
      "Latitude": 1.38647,
      "Longitude": 103.74143,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/8701_2046_20190718204804_53a871.jpg"
    },
    {
      "CameraID": "8702",
      "Latitude": 1.39059,
      "Longitude": 103.7717,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/8702_2046_20190718204804_8ded0d.jpg"
    },
    {
      "CameraID": "8704",
      "Latitude": 1.3899,
      "Longitude": 103.74843,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/8704_2047_20190718204804_a97de3.jpg"
    },
    {
      "CameraID": "8706",
      "Latitude": 1.3664,
      "Longitude": 103.70899,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/8706_2047_20190718204805_84f007.jpg"
    },
    {
      "CameraID": "9701",
      "Latitude": 1.39466333,
      "Longitude": 103.83474601,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/9701_2046_20190718204805_c907de.jpg"
    },
    {
      "CameraID": "9702",
      "Latitude": 1.39474081,
      "Longitude": 103.81797086,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/9702_2047_20190718204805_3c366c.jpg"
    },
    {
      "CameraID": "9703",
      "Latitude": 1.422857,
      "Longitude": 103.773005,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/9703_2047_20190718204805_929cf2.jpg"
    },
    {
      "CameraID": "9704",
      "Latitude": 1.42214311,
      "Longitude": 103.79542062,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/9704_2046_20190718204806_510eb6.jpg"
    },
    {
      "CameraID": "9705",
      "Latitude": 1.42627712,
      "Longitude": 103.78716637,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/9705_2047_20190718204806_a7239e.jpg"
    },
    {
      "CameraID": "9706",
      "Latitude": 1.41270056,
      "Longitude": 103.80642712,
      "ImageLink": "https://s3-ap-southeast-1.amazonaws.com/mtpdm/2019-07-18/20-51/9706_2046_20190718204800_53c81c.jpg"
    }
  ]
}

const fetchData1 = async (url, parameters = {}) => {
  const authKey = {
    AccountKey: 'kzlesW8dS92tEC31eTEYVw==',
  };
  // axios.defaults.baseURL = 'http://datamall2.mytransport.sg/ltaodataservice/Traffic-Images';
  axios.defaults.params = authKey;

  // axios.interceptors.request.use((request) => {
  //   // console.log('Starting Request', request);
  //   const finalParams = Object.entries({ ...request.params })
  //     .map(([key, val]) => `${key}=${val}`)
  //     .join('&');
  //   // console.log(finalParams);
  //   const finalUrl = `${request.baseURL}${request.url}?${finalParams}`;

  //   // console.log('finalUrl');
  //   console.log(finalUrl);

  //   return request;
  // });

  try {
    const response = await axios.get('http://datamall2.mytransport.sg/ltaodataservice/Traffic-Images', {
      params: {
        ...parameters,
      },
    });
    console.log(response.data);

    if (response.status === 200) {
      return {
        success: true,
        ...response.data,
      };
    }
  } catch (error) {
    console.log('error httpStatusCode');
    // console.log(error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 400) {
        return {
          success: false,
          errorCode: error.response.status,
          ...error.response.data,
        };
      }
      console.log('error.response---');
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      console.log('error.response 111');
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      console.log('error.response 22');
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log('error.config');
    console.log(error.config);

    return {
      success: false,
    };
    // return error;
  }
  return {
    success: false,
  };
};

// export const call = () => {
//   return 'hi';
// };

exports.fetchData = fetchData;

// exports.fetchData1 = function() {
//   return "HELLO";
//   };

//   module.exports = 'Hello world';