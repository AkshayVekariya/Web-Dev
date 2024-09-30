require('dotenv').config();
const crypto = require('crypto');
const oauth = require('oauth-1.0a');
const qs = require('querystring');
const { consumers } = require('stream');
const { URLSearchParams } = require('url')

// oauth  signin function
const oauth = oauth({
    consumer: {
        key: process.env.CONSUMER_KEY,
        secret: process.env.CONSUMER_SECRET
    },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) => crypto.createHmac('shal', key).update(baseString).digest('base64')
});


// GET THE OAUTH


async function requesteToken() {
    const requesteTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob&x_auth_access_type=write';
    const authHeader = oauth.toHeader(oauth.authorize({
        url: requestTokenURL,
        method: 'POST'
        }));
const request = await fetch(requesteToken)
}



// VALIDATE THE PIN => User requested action 




// SEND THE MESSAGE



(async () => {
    try {
        const oAuthRequestToken = await requesteToken();
    }
    catch (error) {
        console.log('error: ', error)
    }
})();