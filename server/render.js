const path = require('path');
const fs = require('fs');

module.exports = {
    render: (params) => {
        return new Promise((resolve, reject) => {
            let result;
            const filePath = path.resolve(__dirname, '../build', 'index.html')
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    reject(err)
                }
                data = data.replace(/\$OG_TITLE/g, params.title);
                data = data.replace(/\$OG_DESCRIPTION/g, params.desc);
                result = data.replace(/\$OG_IMAGE/g, params.img);
                resolve(result);
            });
        });
    }
}
