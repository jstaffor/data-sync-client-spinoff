import { MetricsPayload } from "../model";
import { MetricsPublisher } from "./";
/**
 * Metrics publisher that sends payload to remote server
 * Publisher requires remote server URL
 */
export declare class NetworkMetricsPublisher implements MetricsPublisher {
    readonly url: string;
    constructor(url: string);
    /**
     * Allows to publish metrics to external source
     */
    publish(payload: MetricsPayload): Promise<any>;
}
