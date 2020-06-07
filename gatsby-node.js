const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the randomuser api
  const fetchLeagueData = () => axios.get(`https://tm-location.herokuapp.com/league`);
  // await for results
  const res = await fetchLeagueData();

  // map into these results and create nodes
  res.data.matches.map((match) => {
    // Create your node object
    const matchNode = {
      // Required fields
      id: `${match.gameId}`,
      parent: `__SOURCE__`,
      internal: {
        type: `LeagueMatch`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      // Other fields that you want to query with graphQl
      champion: match.champion
    //   gender: user.gender,
    //   name: {
    //     title: user.name.title,
    //     first: user.name.first,
    //     last: user.name.last,
    //   },
    //   picture: {
    //     large: user.picture.large,
    //     medium: user.picture.medium,
    //     thumbnail: user.picture.thumbnail,
    //   }
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(matchNode))
      .digest(`hex`);
    // add it to matchNode
    matchNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(matchNode);
  });

  return;
}