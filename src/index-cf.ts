import { ExecutionContext } from '@cloudflare/workers-types';
import { SimpleEarn } from '@binance/simple-earn';

export interface Env {
    API_KEY: string;
    API_SECRET: string;
}

export default {
    async fetch(event: Event, env: Env, ctx: ExecutionContext): Promise<Response> {
        const configurationRestAPI = {
            apiKey: env.API_KEY,
            apiSecret: env.API_SECRET,
        };

        const simpleEarnClient = new SimpleEarn({ configurationRestAPI });
        const response = await simpleEarnClient.restAPI.getFlexibleProductPosition({
            asset: 'USDT'
        })
        console.log(response);
        return Response.json({
            "raw_response": response,
        });

    },
};
