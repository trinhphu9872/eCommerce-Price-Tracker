'use server'

import { scapeAMSProduct } from "../scaper"

export async function scapeAndStoreProduct(productUrl: string) {
    if (!productUrl) return

    try {
        const scapedProducts = await scapeAMSProduct(productUrl)

    } catch (error: any) {
        throw new Error(`Falied ${error.message}`)
    }

}