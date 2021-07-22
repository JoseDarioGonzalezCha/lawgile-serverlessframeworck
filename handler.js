'use strict';

module.exports.postit = async (event) => {
    const getPost = await this.postit.findAll();
    getPost.then(res => {
      callback(null, {
        status: 200,
        body: JSON.stringify
      })
    })
  };

