import { getData } from '@/services/getData';
import fs from 'fs';
import path from 'path';

// Create a lock
let cacheLock = false;

async function fetchArtistListData(artistListURL, filterArtistListData) {
  const artistList = await getData(artistListURL, filterArtistListData);
  return artistList;
}

const ARTISTLIST_CACHE_PATH = path.join(process.cwd(), '.artistList');

export default async function getArtistList(artistListURL, filterArtistListData) {
  const date = new Date();
  let cachedData;

  try {
    cachedData = JSON.parse(fs.readFileSync(ARTISTLIST_CACHE_PATH, 'utf8'));
  } catch (error) {
  }

  
  // Acquire the lock
  console.log("lock = ", cacheLock)
  while (cacheLock) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait and retry until the lock is released
    console.log("inside lock");
  }
  cacheLock = true;
  console.log("lock = ", cacheLock)

  if (!cachedData || isCacheExpired(cachedData.timestamp)) {
    const data = await fetchArtistListData(artistListURL, filterArtistListData);
    const updatedCache = { data, timestamp: date.getTime()};
    console.log("fetching data to cache")
    try {
      fs.writeFileSync(
        ARTISTLIST_CACHE_PATH,
        JSON.stringify(updatedCache),
        'utf8'
      );
    } catch (error) {
      console.log(error);
    }

    cachedData = data;
  } else {
    cachedData = cachedData.data; // Retrieve the data from the cache object
    console.log("data received from cache")
  }

  
  // Release the lock
  cacheLock = false;
  console.log("lock = ", cacheLock)

  return cachedData;
}

function isCacheExpired(timestamp) {
    const date = new Date();
    // const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const cacheDuration = 60000*5; // 24 hours in milliseconds

    const currentTime = date.getTime();
    return currentTime - timestamp > cacheDuration;
}
