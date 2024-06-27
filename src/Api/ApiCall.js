const baseUrl = "https://amniflix.vercel.app/anime/zoro/"

const ApiCall = async (endpoint) => {
    try {
        const call = await fetch(endpoint);
        const convert = await call.json();
        const data = convert.results
        return data;
    } catch (e) {
        console.log("Error while Calling", e)
    }

};

// TODO: Restart from Here Upper is backUp
export const HomepageFetch = () => {
    const url = `${baseUrl}/home`;
    return ApiCall(url);
};

export const Movies = (page) => {
    const url = `${baseUrl}/movie?page=${page}`;
    return ApiCall(url);
};

export const TvSeries = (page) => {
    const url = `${baseUrl}/tv?page=${page}`;
    return ApiCall(url);
};

export const SpecialSeries = (page) => {
    const url = `${baseUrl}/special?page=${page}`;
    return ApiCall(url);
};

export const MostPopular = (page) => {
    const url = `${baseUrl}/most-popular?page=${page}`;
    return ApiCall(url);
};

export const SearchAnime = (Query, page) => {
    const url = `${baseUrl}/search?q=${Query}&page=${page}`;
    return ApiCall(url);
};
// export const GenraFetch = (genra, page) => {
//     const url = `${baseurl}/genre/${genra}?page=${page}`;
//     return apicall(url);
// };

// export const SearchAnime = (Querytext, page) => {
//     const url = `${baseurl}/search?q=${Querytext}&page=${page}`;
//     return apicall(url);
// };

// export const Details = (id) => {
//     const url = `${baseurl}/info?id=${id}`;
//     return apicall(url);
// };

// export const Ep_list = (id) => {
//     const url = `${baseurl}/episodes/${id}`;
//     return apicall(url);
// };

// export const Stream_link = (id, server, subdub) => {
//     const url = `${baseurl}/episode-srcs?id=${id}&server=${server}&category=${subdub}`;
//     return apicall(url);
// };

// export const Available_servers = (id) => {
//     const url = `${baseurl}/servers?episodeId=${id}`;
//     return apicall(url);
// };

// export const NewStreamLink = (id, subdub) => {
//     const url = `${baseurl}/episode-srcs?id=${id}&category=${subdub}`;
//     return apicall(url);
// };