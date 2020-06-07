const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // LOCATION API GRAPHQL CALLS FOR MAPS.JS
  const fetchLocationData = () => axios.get(`https://tm-location.herokuapp.com/location/`, {
    auth: {
      username: 'client',
      password: 'k6A2wijidpscY3k'
    }
  }
  );
  // await for results
  const locationRes = await fetchLocationData();
  
  locationRes.data.map((location) => {
    // Create your node object
    const locationNode = {
      // Required fields
      id: `${String(location.latitude) + "," + String(location.longitude)}`,
      parent: `__SOURCE__`,
      internal: {
        type: `location`
      },
      // Other fields that you want to query with graphQl
      latitude: location.latitude,
      longitude: location.longitude
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(locationNode))
      .digest(`hex`);
    // add it to matchNode
    locationNode.internal.contentDigest = contentDigest;

    createNode(locationNode);
  });

  // LEAGUE API GRAPHQL CALLS FOR LEAGUE.JS
  const fetchLeagueData = () => axios.get(`https://tm-location.herokuapp.com/league`, {
    auth: {
      username: 'client',
      password: 'k6A2wijidpscY3k'
    }
  }
  );
  // await for results
  const res = await fetchLeagueData();

  // map into these results and create nodes
  const summonerData = {
    id: `${res.data.name}`,
    parent: `__SOURCE__`,
    internal: {
        type: `SummonerData`
    },
    name: res.data.name,
    profileIconId: res.data.profileIconId
  }

  const userContentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(summonerData))
    .digest(`hex`);

  summonerData.internal.contentDigest = userContentDigest;

  createNode(summonerData);

  res.data.matches.map((match) => {
    // Create your node object
    const matchNode = {
      // Required fields
      id: `${match.gameId}`,
      parent: `__SOURCE__`,
      internal: {
        type: `LeagueMatch`
      },
      // Other fields that you want to query with graphQl
      champion: match.champion,
      kda: match.kda,
      map: match.queue.map,
      gameType: match.queue.description,
      win: match.win,
      length: match.length,
      lane: match.lane
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(matchNode))
      .digest(`hex`);
    // add it to matchNode
    matchNode.internal.contentDigest = contentDigest;

    createNode(matchNode);
  });

  return;
}