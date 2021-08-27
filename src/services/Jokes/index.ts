import IJoke from 'interfaces/Joke';
import Service from 'services/Service';

class jokesService extends Service {
  public async getList() {
    const response = await this.api.get<{ results: IJoke[] }>('https://icanhazdadjoke.com/search');
    return response.data;
  }
}

const JokeService = new jokesService();

export default JokeService;
