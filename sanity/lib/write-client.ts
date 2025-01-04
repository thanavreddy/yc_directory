import { createClient } from 'next-sanity'
import 'server-only'
import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR(incremental cache revalidation) or tag-based revalidation
token,
})




if(!writeClient.config().token){
    throw new Error("write token not found");
}