const filterSliderData = (data) =>{
    return data.map(item => {
              const { id, description, alt_description, urls: { raw: rawUrl  }, links :{html: picLink}, likes, user :{ name, portfolio_url: portfolio, links : {html:unsplash}}} = item;
              const user = { name, portfolio, unsplash};
              return { id, description,alt_description, rawUrl, picLink, likes, user};
            });
  }
  
  const filterArtistListData = (data)=>{
    return data.results.map(item => {
      const { id, username, name, profile_image : { medium : profile_image} } = item;
      return {  id, username, name, profile_image};
    });
  }

  const filterUserData = (data)=>{
    
      const { id, username, name, twitter_username, portfolio_url, bio, links : { html : unsplash_page}, profile_image : { medium : profile_image}, instagram_username, photos } = data;
      return { id, username, name, twitter_username, portfolio_url, bio, unsplash_page, profile_image, instagram_username, photos };

  }

  export {filterSliderData, filterArtistListData, filterUserData}