const API_KEY = "46329ece44c503626f3510e6531662da";
const API_BASE = "https://api.themoviedb.org/3";


const basciFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export const Tmdb = async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais do NetFlix',
            items: await basciFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basciFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'em Alta',
            items: await basciFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basciFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        }
   
    ]
}

export const GetMovieInfo = async (movieId, type) => {
    let info = {};
    if (movieId) {
        switch (type) {
            case 'movie':
                info = await basciFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

            case 'tv':
                info = await basciFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

            default: return 'não foi passado'

        }
    }
    return info;
}


export default Tmdb