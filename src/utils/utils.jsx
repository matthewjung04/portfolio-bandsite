import axios from "axios"

/* API url and key */
const url = import.meta.env.URL;

/* API key registeration url: https://unit-2-project-api-25c1595833b2.herokuapp.com/register */
const key = import.meta.envAPI_KEY;
const apiKey = `/?api_key=${key}/`

/* API post request header */
const apiHeader = {
  'Content-Type': 'application/json'
}

export class BandSiteApi {
  /* Axios call url and key parameters */
  constructor(url, apiKey) {
    this.baseUrl = url;
    this.apiKey = apiKey;
  }

  /* GET /comments */
  async getComments() {
    await axios
      .get(`${this.baseUrl}commments${this.apiKey}`)
      .then((res) => {
        return res.data;
      })
  }

  /* GET /showdates */
  async getShows() {
    await axios
      .get(`${this.baseUrl}showdates${this.apiKey}`)
      .then((res) => {
        return res.data;
      })
  }

  /* POST /comments */
  async postComment(comment) {
    await axios
      .post(
        `${this.baseUrl}comments${this.apiKey}`,
        comment, {headers: apiHeader}
      )
      .then((res) => {
        return res.data;
      })
  }

  /* PUT /comments/:id/like */
  async likeComment(comment) {
    await axios
      .put(
        `${this.baseUrl}/comments/${comment.id}/like${this.apiKey}`,
        comment.likes++
      )
      .then((res) => {
        return res.data;
      })
  }
  
  /* DELETE /comments/:id */
  async deleteComment(comment) {
    await axios
      .delete(`${this.baseUrl}/comments/${comment.id + this.apiKey}`)
      .then((res) => {
        return res.data;
      })
  }
}