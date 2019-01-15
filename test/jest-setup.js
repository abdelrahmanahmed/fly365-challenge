import 'jest-localstorage-mock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
jest.mock('../src/services/services-helpers');
const mockApiHeaders = require('../src/services/services-helpers').initAPIHeaders;
mockApiHeaders.mockImplementation((passedHeaders = {}) => {
    let headers = { ...passedHeaders, 'content-type': '', 'authorization': '' };
    headers['content-type'] = 'application/json';
    if (!passedHeaders.authorization || passedHeaders.authorization === '')
        headers['authorization'] = "token";
    else
        headers['authorization'] = passedHeaders.authorization;

    return headers;
});

Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (typeof callback === 'function') {
        return promise.then(function (value) {
            return constructor.resolve(callback()).then(function () {
                return value;
            });
        }, function (reason) {
            return constructor.resolve(callback()).then(function () {
                throw reason;
            });
        });
    }

    return promise.then(callback, callback);
};