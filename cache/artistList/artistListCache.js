import { getData } from '@/services/getData';
import fs from 'fs';
import path from 'path';
import AsyncLock from 'async-lock';
import { getRandomInt } from '@/utils/getRandomInt';
import { filterArtistListData } from '@/utils/filterData';

const lock = new AsyncLock();

const artistNames = ['eberhardgross', 'neom', 'simonppt', 'yfwong' , 'nate_dumlao', 'clemono', 'nixcreative', 'joshrh19', 'wanderingstew', 'possessedphotography', 'timmossholder',
'matreding', 'tani_olorunyomi', 'lizgrin', 'kekse_und_ich', 'memory_terra', 'genebrut', 'taylor_friehl', 'ventiviews', 'markmcneillphotography', 'santonii', 'dasnantu_78', 'phsimeon', 
'pelayonly', 'jusfilm', 'zetong', 'marcospradobr', 'jerrinjms', 'sylwiabartyzel', 'brotakesphotos', 'ingridmartinussen', 'suspct', 'masamasa3', 

]


export async function fetchPathList(){
  let cachedData=null;
  try {
    cachedData = JSON.parse(fs.readFileSync(ARTISTLIST_CACHE_PATH, 'utf8'));
  } catch (error) {
    console.log("error opening file")
  }
  if(cachedData==null)
    return []
  else{
    return cachedData.data.data.map(item=>{
      const {username} = item;
      return {artistName:username}
    })
  }
}

async function fetchArtistListData(key, baseURL,lastRand) {
  let randomInt =  getRandomInt(0,2);
  // while(lastRand!=null&&randomInt!=lastRand)
  //   {randomInt =  getRandomInt(0,2)}
  let artistList =[]
  let error = []
  let status = null
  for(let i=randomInt; i<artistNames.length;i=i+3){
      const artistListURL = `${baseURL}/users/${artistNames[i]}?client_id=${key}`;
      let curArtistData  = await getData(artistListURL, filterArtistListData);
      if(curArtistData.data!=null)
        artistList.push(curArtistData.data);
      else if(curArtistData.errors!=null)
        {error.push(curArtistData.errors); status = curArtistData.status }
  }

  if(artistList.length>0)
    return {
      // mainData :{
        data:artistList,
        errors:null,
        status:200,
      // },
      // lastRand : randomInt
      
    }
  else
    return{
      // mainData:{
        data:null,
        errors:error,
        status:status,
      // },
      // lastRand : randomInt
    }
}

const ARTISTLIST_CACHE_PATH = path.join(process.cwd(), '.next', 'cache', '.artistList');

export default async function getArtistList(key, baseURL) {
  const date = new Date();
  let cachedData;
  await lock.acquire('cacheLock', async () => {
    try {
      cachedData = JSON.parse(fs.readFileSync(ARTISTLIST_CACHE_PATH, 'utf8'));
    } catch (error) {
      console.log("error opening file")
    }

    if (!cachedData || isCacheExpired(cachedData.timestamp)) {
      // let lastRand=null;
      // if(cachedData)
      //   lastRand = cachedData.lastRand
      const data = await fetchArtistListData(key, baseURL);
      // lastRand:data.lastRand
      const updatedCache = { data, timestamp: date.getTime(), };
      console.log("fetching data to cache")
      try {
        fs.writeFileSync(
          ARTISTLIST_CACHE_PATH,
          JSON.stringify(updatedCache),
          'utf8'
        );
      } catch (error) {
        console.log("error while writing",error);
      }

      cachedData = data;
    } else {
      cachedData = cachedData.data; // Retrieve the data from the cache object
      console.log("data received from cache")
    }
  })

  return cachedData;
}

function isCacheExpired(timestamp) {
    const date = new Date();
    const cacheDuration = 24 * 60 * 60 * 1000 - 200000; // 24 hours in milliseconds
    // const cacheDuration = 60000*1; // 24 hours in milliseconds

    const currentTime = date.getTime();
    return currentTime - timestamp > cacheDuration;
}
