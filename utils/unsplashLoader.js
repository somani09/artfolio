import Image from 'next/image';
import React from 'react'
import { getRandomInt } from './getRandomInt';

const errorImages = ["photo-1610337673044-720471f83677","photo-1623018035782-b269248df916","photo-1543285198-3af15c4592ce","photo-1611890798517-07b0fcb4a811"]

function getURL(url) {
  const unsplashBaseUrl = "https://images.unsplash.com"
  const regex =  /\.com\/([^?]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return new URL(`${unsplashBaseUrl}/${match[1]}?`)
  } else {
    const random = getRandomInt(0,errorImages.length);
    return new URL(`${unsplashBaseUrl}/${errorImages[random]}?`); // or any default value you prefer
  }
}
  
const unsplashLoader = ({ src, width, quality = 50 }) => {
  const url = getURL(src);
  const params = url.searchParams;
  width=350*(5/4);

  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", width.toString());

  if (quality) {
      params.set("q", quality.toString());
  }

  return url.href;
};
 
 export {unsplashLoader}