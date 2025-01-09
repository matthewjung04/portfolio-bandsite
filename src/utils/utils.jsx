import axios from "axios"

/* API post request header */
const apiHeader = {
  'Content-Type': 'application/json'
}

export class BandSiteApi {
  /* Axios call url and key parameters */
  constructor() {
    this.baseUrl = import.meta.env.URL || 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';

    const key = import.meta.envAPI_KEY || '78c8e98b-4a2b-4a04-ad0a-87a7b0b979f6';
    this.apiKey = `/?api_key=${key}`;
  }

  /* GET /comments */
  async getComments() {
    const res = await axios.get(`${this.baseUrl}comments${this.apiKey}`);
    return res.data;
  }

  /* GET /showdates */
  async getShows() {
    const res = await axios.get(`${this.baseUrl}showdates${this.apiKey}`);
    return res.data
  }

  /* POST /comments */
  async postComment(comment) {
    const res = await axios.post(`${this.baseUrl}comments${this.apiKey}`, comment, {headers: apiHeader});
  }

  /* PUT /comments/:id/like */
  async likeComment(comment) {
    const res = await axios.put(`${this.baseUrl}/comments/${comment.id}/like${this.apiKey}`, comment.likes++);
  }
  
  /* DELETE /comments/:id */
  async deleteComment(comment) {
    const res = await axios.delete(`${this.baseUrl}/comments/${comment.id + this.apiKey}`)
  }
}