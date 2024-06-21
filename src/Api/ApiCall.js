const baseUrl = "https://amniflix.vercel.app/anime/zoro/"

const ApiCall = async (endpoint) => {
    const call = await fetch(endpoint);
    const convert = await call.json();
    const data = convert.results
    return data;
};

// TODO: Realstart from Here Upper is backUp
export const HomepageFetch = () => {
    const url = `${baseurl}/home`;
    return apicall(url);
};

export const Movies = (page) => {
    const url = `${baseurl}/movie?page=${page}`;
    return apicall(url);
};

export const GenraFetch = (genra, page) => {
    const url = `${baseurl}/genre/${genra}?page=${page}`;
    return apicall(url);
};

export const SearchAnime = (Querytext, page) => {
    const url = `${baseurl}/search?q=${Querytext}&page=${page}`;
    return apicall(url);
};

export const Details = (id) => {
    const url = `${baseurl}/info?id=${id}`;
    return apicall(url);
};

export const Ep_list = (id) => {
    const url = `${baseurl}/episodes/${id}`;
    return apicall(url);
};

export const Stream_link = (id, server, subdub) => {
    const url = `${baseurl}/episode-srcs?id=${id}&server=${server}&category=${subdub}`;
    return apicall(url);
};

export const Available_servers = (id) => {
    const url = `${baseurl}/servers?episodeId=${id}`;
    return apicall(url);
};

export const NewStreamLink = (id, subdub) => {
    const url = `${baseurl}/episode-srcs?id=${id}&category=${subdub}`;
    return apicall(url);
};