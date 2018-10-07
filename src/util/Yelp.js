const apiKey = 'wVcB675svB50rkeTct7s9ylD-dRVxk1MiDI-Y-odEub8ylCFRgtmT2dI-HiwtS-k7ecWH78PFFBJmvPK61w1_IWLKKX2pbYXd2fxgfbF4O65JfawUWkK189T9LO5W3Yx';

const Yelp ={
    
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }            
            ).then(response =>{
                return response.json();
            }).then(jsonResponse =>{
                if (jsonResponse.businesses){
                    return jsonResponse.businesses.map(business =>{
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.alias,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            });
    }
};

export default Yelp;