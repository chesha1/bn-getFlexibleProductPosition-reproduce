import { SimpleEarn } from '@binance/simple-earn';

export async function handler(event: Event) {
    try {
        const configurationRestAPI = {
            apiKey: process.env.API_KEY || '',
            apiSecret: process.env.API_SECRET || '',
        };

        const simpleEarnClient = new SimpleEarn({ configurationRestAPI });
        const response = await simpleEarnClient.restAPI.getFlexibleProductPosition({
            asset: 'USDT'
        })
        const data = await response.data();
        console.log(data);
        return Response.json({
            "raw_response": response,
            "data": data,
        });
    } catch (error: any) {
        console.error(error);
        return Response.json({
            "error_code": error.code || '',
            "error_message": error.message || '',
            "error_stack": error.stack || '',
            "error_name": error.name || '',
            "error_type": error.type || '',
            "error_data": error.data || '',
            "error_raw": error.raw || '',
        });
    }
}
