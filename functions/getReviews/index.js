const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({
    region: "us-west-2"
});

exports.handle = function(e, ctx, callback) {

    let scanParameters = {
        TableName: 'fauxcroix_Reviews',
        Limit: 10
    };
    

    docClient.scan(scanParameters, function(error, data) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, data);
        }

    });

}