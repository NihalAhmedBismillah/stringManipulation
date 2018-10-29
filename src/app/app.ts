

const _ = require('lodash');


export class StringManipulation {

    /**
     * 
     * @param inputString 
     */
    public stringInterwoven(inputString: string): string {

        const reverseStr = inputString.split('').reverse().join('');
        return `${inputString}${reverseStr}`;

    }

    /**
     * 
     * @param inputString 
     */
    public stringPalindrome(inputString: string): boolean {

        inputString = inputString.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
        const reverseString = inputString.split('').reverse().join('');
        return (_.isEqual(inputString, reverseString)) ? true : false;

    }

    /**
     * 
     * @param sourceObject 
     * @param mapObject 
     */
    public objectMappings(sourceObject: any, mapObject: any) {

        if (_.isArray(sourceObject)) {
            sourceObject.forEach(x => {
                this.objectMappings(x, mapObject);
            })
        }
        _.forOwn(sourceObject, (value1: any, key1: string) => {

            if (_.isArray(value1)) {
                this.objectMappings(value1, mapObject);
            }
            if (_.isObject(value1)) {
                _.forOwn(mapObject, (value2: any, key2: string) => {
                    if (_.get(sourceObject, value2)) {
                        data[key2] = _.get(sourceObject, value2);
                    }
                })
            }
        });
        return data;
    }
}


let data1 = [{
    "Name": "Hello",
    "This": {
        "That": {
            "TheOther": "There"
        }
    }
}]

let data2 = {
    "Test_Name": "Name",
    "Test_Value": "This.That.TheOther"
}


const stringManipulation = new StringManipulation();
console.log('Test 1 Result : ', stringManipulation.stringInterwoven('a2b11b2a'));
console.log('Test 2 Result : ', stringManipulation.stringPalindrome("never odd or even"));
let data = {};
console.log('Test 3 Result : ', JSON.stringify(stringManipulation.objectMappings(data1, data2)));