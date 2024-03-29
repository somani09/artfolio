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
  
  if(!cachedData){
    await lock.acquire('cacheLock', async () => {
        try {
          cachedData = JSON.parse(fs.readFileSync(ARTISTLIST_CACHE_PATH, 'utf8'));
        } catch (error) {
          console.log("error opening file")
        }
      })    
   }
  return cachedData.data.data.map(item=>{
    const username = item.username;
    return {artistName:username}
  })
}

async function fetchArtistListData(cachedData) {
  let artistList =[]
  for(let i=0; i<cachedData.length;i++){
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

export default async function getArtistList() {
   testingVar++;
   if(!cachedData){
    await lock.acquire('cacheLock', async () => {
        try {
          cachedData = JSON.parse(fs.readFileSync(ARTISTLIST_CACHE_PATH, 'utf8'));
        } catch (error) {
          console.log("error opening file")
        }
      })    
   }

  if(!artistData)
    {
        artistData = fetchArtistListData(cachedData.data.data);
        lastTimeStamp = date.getTime();
    }

  return artistData;
}

