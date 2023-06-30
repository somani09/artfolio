import { getData } from '@/services/getData';
import fs from 'fs';
import path from 'path';

async function fetchArtistListData(artistListURL, filterArtistListData) {
  console.log('Fetching artistList data...');
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
    console.log('ArtistList cache not initialized');
  }

  if (!cachedData || isCacheExpired(cachedData.timestamp)) {
    const data = await fetchArtistListData(artistListURL, filterArtistListData);
    const updatedCache = { data, timestamp: date.getTime()};

    try {
      fs.writeFileSync(
        ARTISTLIST_CACHE_PATH,
        JSON.stringify(updatedCache),
        'utf8'
      );
      console.log('Wrote to artistList cache');
    } catch (error) {
      console.log('ERROR WRITING artistList CACHE TO FILE');
      console.log(error);
    }

    cachedData = data;
  } else {
    cachedData = cachedData.data; // Retrieve the data from the cache object
  }

  return cachedData;
}

function isCacheExpired(timestamp) {
    const date = new Date();
    const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const currentTime = date.getTime();
    return currentTime - timestamp > cacheDuration;
}
