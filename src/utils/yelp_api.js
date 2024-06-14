const yelpBaseUrl =
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

const requestYelp = async (search, location, sortBy) => {
  let locationQ = `location=${location}`;
  let searchQ = `term=${search}`;
  let sortByQ = `sort_by=${sortBy}`;

  let request = await fetch(
    `${yelpBaseUrl}?${locationQ}&${searchQ}&${sortByQ}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
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
};

export default requestYelp;
