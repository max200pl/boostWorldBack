const axios = require('axios');
const postFormData = (req, res) =>
{
     let data = req.body;
     console.log(data);
     axios.post('/contact-form', data)
          .then(() => res.sendStatus(200))
          .catch(({ response: { data } }) =>
          {
               res.status(400).send(data);
          });

}
module.exports = postFormData;