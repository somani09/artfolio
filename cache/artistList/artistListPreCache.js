import fs from 'fs';
import path from 'path';
import AsyncLock from 'async-lock';
import { getRandomInt } from '@/utils/getRandomInt';

const lock = new AsyncLock();

const artistNames = ['eberhardgross', 'neom', 'simonppt', 'yfwong' , 'nate_dumlao', 'clemono', 'nixcreative', 'joshrh19', 'wanderingstew', 'possessedphotography', 'timmossholder',
'matreding', 'tani_olorunyomi', 'lizgrin', 'kekse_und_ich', 'memory_terra', 'genebrut', 'taylor_friehl', 'ventiviews', 'markmcneillphotography', 'santonii', 'dasnantu_78', 'phsimeon', 
'pelayonly', 'jusfilm', 'zetong', 'marcospradobr', 'jerrinjms', 'sylwiabartyzel', 'brotakesphotos', 'ingridmartinussen', 'suspct', 'masamasa3', 
]

let testingVar = 1;

const ARTISTLIST_CACHE_PATH = path.join(process.cwd(), '.artistList');

let cachedData;
let artistData;
let lastTimeStamp=0;
const date = new Date();

export async function fetchPathList(){
  
  if(!artistData)
    return []
  else{
    return artistData.data.map(item=>{
      const {username} = item;
      return {artistName:username}
    })
  }
}

async function fetchArtistListData(cachedData) {
  let artistList =[]
  let randomInt =  getRandomInt(0,2);
  for(let i=randomInt; i<cachedData.length;i=i+3){
    artistList.push(cachedData[i]);
  }

  if(artistList.length>0)
    return {
        data:artistList,
        errors:null,
        status:200,
    }
  else
    return{
        data:null,
        errors:"Error occured retriving data",
        status:0,
    }
}


export default async function getArtistList(key, baseURL) {
//    console.log("testingVar=",testingVar);
//    console.log("timeStamp=",lastTimeStamp);
   testingVar++;
   if(!cachedData){
    await lock.acquire('cacheLock', async () => {
        try {
          cachedData = JSON.parse(fs.readFileSync(ARTISTLIST_CACHE_PATH, 'utf8'));
        //   console.log(cachedData.data.data)
        } catch (error) {
          console.log("error opening file")
        }
      })    
   }

  if(!artistData || isCacheExpired(lastTimeStamp) )
    {
        artistData = fetchArtistListData(cachedData.data.data);
        lastTimeStamp = date.getTime();
    }

  return artistData;
}

function isCacheExpired(timestamp) {
    // const cacheDuration = 24 * 60 * 60 * 1000 - 200000; // 24 hours in milliseconds
    const cacheDuration = 60000*10 - 50000; // 

    const currentTime = date.getTime();
    return currentTime - timestamp > cacheDuration;
}
