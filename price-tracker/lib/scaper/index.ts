import axios from "axios";
import * as cheerio from 'cheerio';

export async function scapeAMSProduct(url: string) {
    if (!url) return


    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_47846830-zone-pricewise:0bw4i1ydzb9q -k https://lumtest.com/myip.json
    // BrighData proxy config
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random()) || 0

    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }


    try {
        const response = await axios.get(url, options)

        const $ = cheerio.load(response.data)
        console.log($)
        const title = $('#productTitle').text().trim()
        const currentPrice = extractPrice()

    } catch (error: any) {
        throw new Error(`Failed ..... ${error.message}`)

    }
}