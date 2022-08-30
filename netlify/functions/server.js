exports.handler = function (event, context, callback) {
    // The event object contains information about the request
    // The callback argument is how you return information to the caller and follows a pretty standard form of: callback(error, result)

    let data = {
        name: 'john',
        time: Date.now()
    };

    console.log('data:' + JSON.stringify(data));

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
    });
}