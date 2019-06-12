"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
/**
 * Metrics publisher that sends payload to remote server
 * Publisher requires remote server URL
 */
var NetworkMetricsPublisher = /** @class */ (function () {
    function NetworkMetricsPublisher(url) {
        this.url = url;
    }
    /**
     * Allows to publish metrics to external source
     */
    NetworkMetricsPublisher.prototype.publish = function (payload) {
        return axios_1.default.post(this.url, payload);
    };
    return NetworkMetricsPublisher;
}());
exports.NetworkMetricsPublisher = NetworkMetricsPublisher;
//# sourceMappingURL=NetworkMetricsPublisher.js.map