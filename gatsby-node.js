const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the randomuser api
  const fetchLeagueData = () => axios.get(`https://tm-location.herokuapp.com/league`);
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