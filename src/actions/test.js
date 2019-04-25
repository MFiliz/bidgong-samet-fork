import axios from 'axios';

export async function fetchPhotos() {
    const response = await axios.get("https://dog.ceo/api/breed/husky/images");
    return {
      type: "FETCH_PHOTOS",
      payload: {
        data: response.data,
        likes: 0
      }
    };
  }

  export default function (state = [], action) {
    switch (action.type) {
      case "FETCH_PHOTOS":
        return [action.payload.data.message, action.payload.likes];
      default:
        return state;
    }
  }


  