import axios from "axios"

/* API post request header */
const apiHeader = {
  'Content-Type': 'application/json'
}

export class BandSiteApi {
  /* Axios call url and key parameters */
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';

    const key = import.meta.envAPI_KEY || '2a144518-c839-4362-8e6c-6c0c2e073bd7';
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
  async likeComment(commentId) {
    const res = await axios.put(`${this.baseUrl}comments/${commentId}/like${this.apiKey}`);
  }
  
  /* DELETE /comments/:id */
  async deleteComment(commentId) {
    const res = await axios.delete(`${this.baseUrl}comments/${commentId}${this.apiKey}`)
  }
}