import { Configuration, OpenAIApi } from "openai"
import { writeFileSync } from "fs"
import fetch from "node-fetch"

const configuration = new Configuration({
  apiKey: "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",
})
const openai = new OpenAIApi(configuration)
const result = await openai.createImage({
  prompt: "a lady drinking tea",
  n: 2,
  size: "512x512",
})

const url = result.data.data[0].url
const imageUrl = await fetch(url)
const blob = await imageUrl.blob()
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`, buffer)
