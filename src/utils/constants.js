export const LOGO_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/f2fe4463-6b37-4e82-93e5-843b55351424/AU-en-20240624-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const PHOTO_URL =
  "https://occ-0-8326-2568.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_API_KEY}`,
  },
};
