import axios from "axios";
import { FAKE_URL, LEGO_API_KEY } from "../constants/links";

export const fetchFigureParts = async (figureNum) => {
  const result = await axios.get(
    `https://rebrickable.com/api/v3/lego/minifigs/${figureNum}/parts/?key=${LEGO_API_KEY}`
  );
  const fetchedElements = result.data.results;
  const filteredElements = fetchedElements.map((element) => element.part);
  return filteredElements;
};

export const fetchHarryPotterFigures = async () => {
  const response = await axios.get(
    `https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&page_size=300&key=${LEGO_API_KEY}&page=2&ordering=-name%2Cid`
  );
  const results = response.data.results.filter((item) => item.set_img_url);
  return results;
};

export const postShippingFormData = async (data) => {
  const response = await axios.post(FAKE_URL, data);
  return response;
};
