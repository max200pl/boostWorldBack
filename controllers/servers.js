const axios = require('axios');
const bodyParser = require('body-parser');
const postFormData = (req, res) =>
{


     let data = res.json(req.body);
     console.log(data);

     axios.post('/contact', data)
          .then(() => res.sendStatus(200))
          .catch(({ response: { data } }) =>
          {
               res.status(400).send(data);
          });

}
module.exports = postFormData;