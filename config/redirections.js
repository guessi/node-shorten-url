// fallback for keyword not found
exports.fallback_url = 'https://github.com/guessi/node-shorten-url';

// define url mapping in key/value pairs
// if the target keyword required mobile detection feature
// define keyword with key supported keys: 'iOS', 'AndroidOS'
// and please be noted that the keys are **case sensitive**
exports.keywords = {
    'store': {
        'iOS': 'https://www.apple.com/ios/app-store',
        'AndroidOS': 'https://play.google.com',
        'default': 'https://www.amazon.com'
    },
    'github': {
        'default': 'https://github.com'
    },
    'appleonly': {
        'iOS': 'https://www.apple.com'
    },
    'androidonly': {
        'AndroidOS': 'https://source.android.com/'
    },
    'nodefault': {
        'iOS': 'https://www.apple.com',
        'AndroidOS': 'https://source.android.com/'
    },
    'example': {
        'default': 'https://www.google.com/'
    }
};
