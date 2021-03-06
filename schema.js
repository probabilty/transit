const Joi = require('@hapi/joi');

const arrayObj = Joi.object().keys({
  url: Joi.string(),
  filename: Joi.string().required(),
  layerId: Joi.string().required(),
  layerName: Joi.string(),
  agencyId: Joi.string(),
  agencyName: Joi.string()
});


/** Schema Configuration

   datapath: string (required)
   feeds: array of objects ... see above (required)
   example:
  "transit": {
    "datapath": "/data/transit",
    "feeds": [
    {
      "layerId": "stops",
      "url": "http://developer.trimet.org/schedule/gtfs.zip",
      "filename": "TRIMET-stops.txt",
      "agencyId": "TRIMET",
      "agencyName": "TriMet"
    }
    ]
  },
  ...
*/
module.exports = Joi.object().keys({
  datapath: Joi.string().required(),
  feeds: Joi.array().items(arrayObj)
});
