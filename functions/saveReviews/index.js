const AWS = require("aws-sdk");
const uuid = require("uuid");
const docClient = new AWS.DynamoDB.DocumentClient({
    region: "us-west-2"
});

exports.handle = function(e, ctx, callback) {

    let review = e;
    review.id = uuid.v4();
    review.createdAt = Date.now() + "";

    let putInstruction = {
        Item: review, 
        TableName: "fauxcroix_Reviews"
    }
        
    docClient.put(putInstruction, function(error, data) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, data);
        }

    });
}