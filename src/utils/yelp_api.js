const yelpBaseUrl =
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
require('dotenv-defaults').config({ silent: false });
const yelpApiKey='QrFzAe-h6sNqhV7M5H0InC93anZiC6krbFLUqk-8rVJ206BRM-FyMBsS4q9sAsV9IArTNNIvaA1Fcf3AIemJblXzwRXdMIiQ35QfpfpoqjHNPv6zRpDJXkiuzTRBZXYx';


const requestYelp = async (search, location, sortBy) => {
  let locationQ = `location=${location}`;
  let searchQ = `term=${search}`;
  let sortByQ = `sort_by=${sortBy}`;

  let request = await fetch(
    `${yelpBaseUrl}?${locationQ}&${searchQ}&${sortByQ}`,
    {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      const businesses = jsonResponse.businesses || [];
      return businesses.map((business) => ({
        id: business.id,
        image: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
    });
  return request;
  // let b = [];
  // for (let i = 0; i<Math.random()*10;i++) {
  //     b.push(business)
  // };
  // console.log(b);
  // return b
};

export default requestYelp;
