import * as Prsimic from '@prismicio/client'

const repoName = 'pascale'
const endpoint = Prsimic.getEndpoint(repoName)

export const client = Prsimic.createClient(endpoint)

