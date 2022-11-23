import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  }
});